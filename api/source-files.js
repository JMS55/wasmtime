var N = null;var sourcesIndex = {};
sourcesIndex["clif_json"] = {"name":"","files":["clif-json.rs"]};
sourcesIndex["clif_util"] = {"name":"","files":["bugpoint.rs","cat.rs","clif-util.rs","compile.rs","disasm.rs","interpret.rs","print_cfg.rs","run.rs","souper_harvest.rs","utils.rs","wasm.rs"]};
sourcesIndex["cranelift"] = {"name":"","files":["lib.rs"]};
sourcesIndex["cranelift_bforest"] = {"name":"","files":["lib.rs","map.rs","node.rs","path.rs","pool.rs","set.rs"]};
sourcesIndex["cranelift_codegen"] = {"name":"","dirs":[{"name":"binemit","files":["mod.rs","stack_map.rs"]},{"name":"ir","files":["atomic_rmw_op.rs","builder.rs","condcodes.rs","constant.rs","dfg.rs","entities.rs","extfunc.rs","extname.rs","function.rs","globalvalue.rs","heap.rs","immediates.rs","instructions.rs","jumptable.rs","layout.rs","libcall.rs","memflags.rs","mod.rs","progpoint.rs","sourceloc.rs","stackslot.rs","table.rs","trapcode.rs","types.rs"]},{"name":"isa","dirs":[{"name":"aarch64","dirs":[{"name":"inst","dirs":[{"name":"unwind","files":["systemv.rs"]}],"files":["args.rs","emit.rs","imms.rs","mod.rs","regs.rs","unwind.rs"]},{"name":"lower","dirs":[{"name":"isle","files":["generated_code.rs"]}],"files":["isle.rs"]}],"files":["abi.rs","lower.rs","lower_inst.rs","mod.rs","settings.rs"]},{"name":"s390x","dirs":[{"name":"inst","dirs":[{"name":"unwind","files":["systemv.rs"]}],"files":["args.rs","emit.rs","imms.rs","mod.rs","regs.rs","unwind.rs"]},{"name":"lower","dirs":[{"name":"isle","files":["generated_code.rs"]}],"files":["isle.rs"]}],"files":["abi.rs","lower.rs","mod.rs","settings.rs"]},{"name":"unwind","files":["systemv.rs","winx64.rs"]},{"name":"x64","dirs":[{"name":"encoding","files":["evex.rs","mod.rs","rex.rs","vex.rs"]},{"name":"inst","dirs":[{"name":"unwind","files":["systemv.rs","winx64.rs"]}],"files":["args.rs","emit.rs","mod.rs","regs.rs","unwind.rs"]},{"name":"lower","dirs":[{"name":"isle","files":["generated_code.rs"]}],"files":["isle.rs"]}],"files":["abi.rs","lower.rs","mod.rs","settings.rs"]}],"files":["call_conv.rs","mod.rs","unwind.rs"]},{"name":"legalizer","files":["globalvalue.rs","heap.rs","mod.rs","table.rs"]},{"name":"machinst","files":["abi.rs","abi_impl.rs","blockorder.rs","buffer.rs","compile.rs","helpers.rs","inst_common.rs","isle.rs","lower.rs","mod.rs","reg.rs","valueregs.rs","vcode.rs"]},{"name":"verifier","files":["flags.rs","mod.rs"]}],"files":["alias_analysis.rs","bitset.rs","cfg_printer.rs","constant_hash.rs","context.rs","cursor.rs","data_value.rs","dbg.rs","dce.rs","divconst_magic_numbers.rs","dominator_tree.rs","flowgraph.rs","fx.rs","inst_predicates.rs","iterators.rs","lib.rs","licm.rs","loop_analysis.rs","nan_canonicalization.rs","print_errors.rs","remove_constant_phis.rs","result.rs","scoped_hash_map.rs","settings.rs","simple_gvn.rs","simple_preopt.rs","souper_harvest.rs","timing.rs","unreachable_code.rs","value_label.rs","write.rs"]};
sourcesIndex["cranelift_codegen_meta"] = {"name":"","dirs":[{"name":"cdsl","files":["formats.rs","instructions.rs","isa.rs","mod.rs","operands.rs","settings.rs","types.rs","typevar.rs"]},{"name":"isa","files":["arm64.rs","mod.rs","s390x.rs","x86.rs"]},{"name":"shared","files":["entities.rs","formats.rs","immediates.rs","instructions.rs","mod.rs","settings.rs","types.rs"]}],"files":["constant_hash.rs","error.rs","gen_inst.rs","gen_settings.rs","gen_types.rs","lib.rs","srcgen.rs","unique_table.rs"]};
sourcesIndex["cranelift_codegen_shared"] = {"name":"","files":["constant_hash.rs","constants.rs","lib.rs"]};
sourcesIndex["cranelift_entity"] = {"name":"","files":["boxed_slice.rs","iter.rs","keys.rs","lib.rs","list.rs","map.rs","packed_option.rs","primary.rs","set.rs","sparse.rs"]};
sourcesIndex["cranelift_filetests"] = {"name":"","files":["concurrent.rs","function_runner.rs","lib.rs","match_directive.rs","runner.rs","runone.rs","runtest_environment.rs","subtest.rs","test_alias_analysis.rs","test_cat.rs","test_compile.rs","test_dce.rs","test_domtree.rs","test_interpret.rs","test_legalizer.rs","test_licm.rs","test_preopt.rs","test_print_cfg.rs","test_run.rs","test_safepoint.rs","test_simple_gvn.rs","test_simple_preopt.rs","test_unwind.rs","test_verifier.rs"]};
sourcesIndex["cranelift_frontend"] = {"name":"","files":["frontend.rs","lib.rs","ssa.rs","switch.rs","variable.rs"]};
sourcesIndex["cranelift_fuzzgen"] = {"name":"","files":["config.rs","function_generator.rs","lib.rs"]};
sourcesIndex["cranelift_interpreter"] = {"name":"","files":["address.rs","environment.rs","frame.rs","instruction.rs","interpreter.rs","lib.rs","state.rs","step.rs","value.rs"]};
sourcesIndex["cranelift_isle"] = {"name":"","files":["ast.rs","codegen.rs","compile.rs","error.rs","error_miette.rs","ir.rs","lexer.rs","lib.rs","log.rs","parser.rs","sema.rs","trie.rs"]};
sourcesIndex["cranelift_jit"] = {"name":"","files":["backend.rs","compiled_blob.rs","lib.rs","memory.rs"]};
sourcesIndex["cranelift_module"] = {"name":"","files":["data_context.rs","lib.rs","module.rs","traps.rs"]};
sourcesIndex["cranelift_native"] = {"name":"","files":["lib.rs"]};
sourcesIndex["cranelift_object"] = {"name":"","files":["backend.rs","lib.rs"]};
sourcesIndex["cranelift_preopt"] = {"name":"","files":["constant_folding.rs","lib.rs"]};
sourcesIndex["cranelift_reader"] = {"name":"","files":["error.rs","heap_command.rs","isaspec.rs","lexer.rs","lib.rs","parser.rs","run_command.rs","sourcemap.rs","testcommand.rs","testfile.rs"]};
sourcesIndex["cranelift_wasm"] = {"name":"","dirs":[{"name":"environ","files":["dummy.rs","mod.rs","spec.rs"]},{"name":"state","files":["func_state.rs","mod.rs","module_state.rs"]}],"files":["code_translator.rs","func_translator.rs","lib.rs","module_translator.rs","sections_translator.rs","translation_utils.rs"]};
sourcesIndex["fib"] = {"name":"","files":["fib.rs"]};
sourcesIndex["islec"] = {"name":"","files":["main.rs"]};
sourcesIndex["run_examples"] = {"name":"","files":["main.rs"]};
sourcesIndex["tokio_wasi"] = {"name":"","files":["tokio-wasi.rs"]};
sourcesIndex["wasi"] = {"name":"","files":["wasi.rs"]};
sourcesIndex["wasi_cap_std_sync"] = {"name":"","dirs":[{"name":"sched","files":["unix.rs"]}],"files":["clocks.rs","dir.rs","file.rs","lib.rs","net.rs","sched.rs","stdio.rs"]};
sourcesIndex["wasi_common"] = {"name":"","dirs":[{"name":"sched","files":["subscription.rs"]},{"name":"snapshots","files":["mod.rs","preview_0.rs","preview_1.rs"]}],"files":["clocks.rs","ctx.rs","dir.rs","error.rs","file.rs","lib.rs","pipe.rs","random.rs","sched.rs","string_array.rs","table.rs"]};
sourcesIndex["wasi_crypto"] = {"name":"","dirs":[{"name":"asymmetric_common","files":["keypair.rs","managed_keypair.rs","mod.rs","publickey.rs","secretkey.rs"]},{"name":"key_exchange","dirs":[{"name":"dh","files":["mod.rs","x25519.rs"]},{"name":"kem","files":["kyber.rs","mod.rs"]}],"files":["keypair.rs","mod.rs","publickey.rs","secretkey.rs"]},{"name":"signatures","files":["ecdsa.rs","eddsa.rs","keypair.rs","mod.rs","publickey.rs","rsa.rs","secretkey.rs","signature.rs"]},{"name":"symmetric","files":["aes_gcm.rs","chacha_poly.rs","hkdf.rs","hmac_sha2.rs","key.rs","managed_key.rs","mod.rs","sha2.rs","state.rs","tag.rs","xoodyak.rs"]}],"files":["array_output.rs","error.rs","handles.rs","lib.rs","options.rs","rand.rs","secrets_manager.rs","version.rs"]};
sourcesIndex["wasi_tokio"] = {"name":"","dirs":[{"name":"sched","files":["unix.rs"]}],"files":["dir.rs","file.rs","lib.rs","net.rs","sched.rs","stdio.rs"]};
sourcesIndex["wasm_spec_interpreter"] = {"name":"","files":["lib.rs","without_library.rs"]};
sourcesIndex["wasmtime"] = {"name":"","dirs":[{"name":"func","files":["typed.rs"]},{"name":"module","files":["registry.rs","serialization.rs"]},{"name":"store","files":["context.rs","data.rs"]},{"name":"trampoline","files":["func.rs","global.rs","memory.rs","table.rs"]},{"name":"types","files":["matching.rs"]}],"files":["config.rs","engine.rs","externals.rs","func.rs","instance.rs","lib.rs","limits.rs","linker.rs","memory.rs","module.rs","ref.rs","signatures.rs","store.rs","trampoline.rs","trap.rs","types.rs","unix.rs","values.rs"]};
sourcesIndex["wasmtime_bench_api"] = {"name":"","files":["lib.rs","unsafe_send_sync.rs"]};
sourcesIndex["wasmtime_c_api_macros"] = {"name":"","files":["lib.rs"]};
sourcesIndex["wasmtime_cache"] = {"name":"","files":["config.rs","lib.rs","worker.rs"]};
sourcesIndex["wasmtime_cli_flags"] = {"name":"","files":["lib.rs"]};
sourcesIndex["wasmtime_cranelift"] = {"name":"","dirs":[{"name":"debug","dirs":[{"name":"transform","files":["address_transform.rs","attr.rs","expression.rs","line_program.rs","mod.rs","range_info_builder.rs","refs.rs","simulate.rs","unit.rs","utils.rs"]}],"files":["gc.rs","write_debuginfo.rs"]}],"files":["builder.rs","compiler.rs","debug.rs","func_environ.rs","lib.rs","obj.rs"]};
sourcesIndex["wasmtime_environ"] = {"name":"","files":["address_map.rs","builtin.rs","compilation.rs","lib.rs","module.rs","module_environ.rs","module_types.rs","obj.rs","ref_bits.rs","stack_map.rs","trap_encoding.rs","tunables.rs","vmoffsets.rs"]};
sourcesIndex["wasmtime_fiber"] = {"name":"","dirs":[{"name":"unix","files":["x86_64.rs"]}],"files":["lib.rs","unix.rs"]};
sourcesIndex["wasmtime_fuzzing"] = {"name":"","dirs":[{"name":"generators","files":["api.rs","table_ops.rs"]},{"name":"oracles","files":["dummy.rs","v8.rs"]}],"files":["generators.rs","lib.rs","mutators.rs","oracles.rs"]};
sourcesIndex["wasmtime_jit"] = {"name":"","dirs":[{"name":"profiling","files":["jitdump_linux.rs","vtune.rs"]},{"name":"unwind","files":["systemv.rs"]}],"files":["code_memory.rs","debug.rs","demangling.rs","instantiate.rs","lib.rs","profiling.rs","unwind.rs"]};
sourcesIndex["wasmtime_jit_debug"] = {"name":"","files":["gdb_jit_int.rs","lib.rs","perf_jitdump.rs"]};
sourcesIndex["wasmtime_runtime"] = {"name":"","dirs":[{"name":"instance","dirs":[{"name":"allocator","dirs":[{"name":"pooling","files":["index_allocator.rs","linux.rs"]}],"files":["pooling.rs"]}],"files":["allocator.rs"]},{"name":"traphandlers","files":["unix.rs"]}],"files":["cow.rs","debug_builtins.rs","export.rs","externref.rs","imports.rs","instance.rs","lib.rs","libcalls.rs","memory.rs","mmap.rs","mmap_vec.rs","module_id.rs","table.rs","traphandlers.rs","vmcontext.rs"]};
sourcesIndex["wasmtime_types"] = {"name":"","files":["error.rs","lib.rs"]};
sourcesIndex["wasmtime_wasi"] = {"name":"","files":["lib.rs"]};
sourcesIndex["wasmtime_wasi_crypto"] = {"name":"","dirs":[{"name":"wiggle_interfaces","files":["asymmetric_common.rs","common.rs","error.rs","key_exchange.rs","mod.rs","signatures.rs","symmetric.rs"]}],"files":["lib.rs"]};
sourcesIndex["wasmtime_wasi_nn"] = {"name":"","files":["api.rs","ctx.rs","impl.rs","lib.rs","openvino.rs","witx.rs"]};
sourcesIndex["wasmtime_wast"] = {"name":"","files":["lib.rs","spectest.rs","wast.rs"]};
sourcesIndex["wiggle"] = {"name":"","files":["borrow.rs","error.rs","guest_type.rs","lib.rs","region.rs","wasmtime.rs"]};
sourcesIndex["wiggle_generate"] = {"name":"","dirs":[{"name":"types","files":["flags.rs","handle.rs","mod.rs","record.rs","variant.rs"]}],"files":["codegen_settings.rs","config.rs","funcs.rs","lib.rs","lifetimes.rs","module_trait.rs","names.rs","wasmtime.rs"]};
sourcesIndex["wiggle_macro"] = {"name":"","files":["lib.rs"]};
sourcesIndex["wiggle_test"] = {"name":"","files":["lib.rs"]};
sourcesIndex["witx"] = {"name":"","dirs":[{"name":"docs","files":["ast.rs","md.rs","mod.rs"]}],"files":["abi.rs","ast.rs","io.rs","layout.rs","lib.rs","parser.rs","phases.rs","polyfill.rs","render.rs","representation.rs","toplevel.rs","validate.rs"]};
createSourceSidebar();
