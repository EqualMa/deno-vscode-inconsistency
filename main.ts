// This code has a type error.
//
// `deno check main.ts` correctly reports the error.
//
// Vscode also reports this error,
// when we first open the workspace
// or after manually running vscode command `Deno: Restart Language Server` with only this file open in the editor,
// which is consistent with `deno check`.
//
// Then, we Go to Definition (F12) of the imported type and come back.
// Vscode no longer reports this error.
const _: import("npm:@ipld/dag-pb").ByteView<boolean> = 1;
//                                  ^--- Go to Definition (F12) of this type
//    ^------- Then its type is resolved as `any`

// This inconsistency seems only happens with `deno.json`.
// If we `rm deno.json deno.lock`, then vscode always reports this error as expected.
