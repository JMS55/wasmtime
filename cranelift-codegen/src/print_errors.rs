//! Utility routines for pretty-printing error messages.

use crate::entity::SecondaryMap;
use crate::ir;
use crate::ir::entities::{AnyEntity, Ebb, Inst, Value};
use crate::ir::function::Function;
use crate::isa::TargetIsa;
use crate::result::CodegenError;
use crate::verifier::{VerifierError, VerifierErrors};
use crate::write::{decorate_function, FuncWriter, PlainWriter};
use core::fmt;
use core::fmt::Write;
use alloc::boxed::Box;
use alloc::string::{String, ToString};
use alloc::vec::Vec;

/// Pretty-print a verifier error.
pub fn pretty_verifier_error<'a>(
    func: &ir::Function,
    isa: Option<&dyn TargetIsa>,
    func_w: Option<Box<dyn FuncWriter + 'a>>,
    errors: VerifierErrors,
) -> String {
    let mut errors = errors.0;
    let mut w = String::new();
    let num_errors = errors.len();

    decorate_function(
        &mut PrettyVerifierError(func_w.unwrap_or_else(|| Box::new(PlainWriter)), &mut errors),
        &mut w,
        func,
        &isa.into(),
    )
    .unwrap();

    writeln!(
        w,
        "\n; {} verifier error{} detected (see above). Compilation aborted.",
        num_errors,
        if num_errors == 1 { "" } else { "s" }
    )
    .unwrap();

    w
}

struct PrettyVerifierError<'a>(Box<dyn FuncWriter + 'a>, &'a mut Vec<VerifierError>);

impl<'a> FuncWriter for PrettyVerifierError<'a> {
    fn write_ebb_header(
        &mut self,
        w: &mut dyn Write,
        func: &Function,
        isa: Option<&dyn TargetIsa>,
        ebb: Ebb,
        indent: usize,
    ) -> fmt::Result {
        pretty_ebb_header_error(w, func, isa, ebb, indent, &mut *self.0, self.1)
    }

    fn write_instruction(
        &mut self,
        w: &mut dyn Write,
        func: &Function,
        aliases: &SecondaryMap<Value, Vec<Value>>,
        isa: Option<&dyn TargetIsa>,
        inst: Inst,
        indent: usize,
    ) -> fmt::Result {
        pretty_instruction_error(w, func, aliases, isa, inst, indent, &mut *self.0, self.1)
    }

    fn write_entity_definition(
        &mut self,
        w: &mut dyn Write,
        func: &Function,
        entity: AnyEntity,
        value: &dyn fmt::Display,
    ) -> fmt::Result {
        pretty_preamble_error(w, func, entity, value, &mut *self.0, self.1)
    }
}

/// Pretty-print a function verifier error for a given EBB.
fn pretty_ebb_header_error(
    w: &mut dyn Write,
    func: &Function,
    isa: Option<&dyn TargetIsa>,
    cur_ebb: Ebb,
    indent: usize,
    func_w: &mut dyn FuncWriter,
    errors: &mut Vec<VerifierError>,
) -> fmt::Result {
    let mut s = String::new();
    func_w.write_ebb_header(&mut s, func, isa, cur_ebb, indent)?;
    write!(w, "{}", s)?;

    // TODO: Use drain_filter here when it gets stabilized
    let mut i = 0;
    let mut printed_error = false;
    while i != errors.len() {
        match errors[i].location {
            ir::entities::AnyEntity::Ebb(ebb) if ebb == cur_ebb => {
                if !printed_error {
                    print_arrow(w, &s)?;
                    printed_error = true;
                }
                let err = errors.remove(i);
                print_error(w, err)?;
            }
            _ => i += 1,
        }
    }

    if printed_error {
        w.write_char('\n')?;
    }

    Ok(())
}

/// Pretty-print a function verifier error for a given instruction.
fn pretty_instruction_error(
    w: &mut dyn Write,
    func: &Function,
    aliases: &SecondaryMap<Value, Vec<Value>>,
    isa: Option<&dyn TargetIsa>,
    cur_inst: Inst,
    indent: usize,
    func_w: &mut dyn FuncWriter,
    errors: &mut Vec<VerifierError>,
) -> fmt::Result {
    let mut s = String::new();
    func_w.write_instruction(&mut s, func, aliases, isa, cur_inst, indent)?;
    write!(w, "{}", s)?;

    // TODO: Use drain_filter here when it gets stabilized
    let mut i = 0;
    let mut printed_error = false;
    while i != errors.len() {
        match errors[i].location {
            ir::entities::AnyEntity::Inst(inst) if inst == cur_inst => {
                if !printed_error {
                    print_arrow(w, &s)?;
                    printed_error = true;
                }
                let err = errors.remove(i);
                print_error(w, err)?;
            }
            _ => i += 1,
        }
    }

    if printed_error {
        w.write_char('\n')?;
    }

    Ok(())
}

fn pretty_preamble_error(
    w: &mut dyn Write,
    func: &Function,
    entity: AnyEntity,
    value: &dyn fmt::Display,
    func_w: &mut dyn FuncWriter,
    errors: &mut Vec<VerifierError>,
) -> fmt::Result {
    let mut s = String::new();
    func_w.write_entity_definition(&mut s, func, entity, value)?;
    write!(w, "{}", s)?;

    // TODO: Use drain_filter here when it gets stabilized
    let mut i = 0;
    let mut printed_error = false;
    while i != errors.len() {
        if entity == errors[i].location {
            if !printed_error {
                print_arrow(w, &s)?;
                printed_error = true;
            }
            let err = errors.remove(i);
            print_error(w, err)?;
        } else {
            i += 1
        }
    }

    if printed_error {
        w.write_char('\n')?;
    }

    Ok(())
}

/// Prints:
///    ;   ^~~~~~
fn print_arrow(w: &mut dyn Write, entity: &str) -> fmt::Result {
    write!(w, ";")?;

    let indent = entity.len() - entity.trim_start().len();
    if indent != 0 {
        write!(w, "{1:0$}^", indent - 1, "")?;
    }

    for _ in 0..entity.trim().len() - 1 {
        write!(w, "~")?;
    }

    writeln!(w)
}

/// Prints:
///    ; error: [ERROR BODY]
fn print_error(w: &mut dyn Write, err: VerifierError) -> fmt::Result {
    writeln!(w, "; error: {}", err.to_string())?;
    Ok(())
}

/// Pretty-print a Cranelift error.
pub fn pretty_error(func: &ir::Function, isa: Option<&dyn TargetIsa>, err: CodegenError) -> String {
    if let CodegenError::Verifier(e) = err {
        pretty_verifier_error(func, isa, None, e)
    } else {
        err.to_string()
    }
}