import { CompilerOptions, ModuleKind, ScriptTarget, transpile } from 'typescript'

const options: CompilerOptions = {
  module: ModuleKind.ES2022,
  target: ScriptTarget.ES2022
}

export function transpileCode(tsCode: string) {
  return transpile(tsCode, options);
}