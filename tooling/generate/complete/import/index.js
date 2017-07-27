import mapValues from "@unction/mapvalues"
import {join} from "ramda"

const finalNewline = (value: string): string => `${value}\n`
// const exports = pipe(exportLines, join("\n"), finalNewline)

export default function generateCompleteImport (names: Array<string>): string {
  return names
    | mapValues((name: string): string => `export {default as ${name}} from "${name}"`)
    | join("\n")
    | finalNewline
}
