/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import mapValues from "@unction/mapvalues"
import {join} from "ramda"

import toFullName from "../../shared/toFullName"

const finalNewline = (value: string): string => `${value}\n`

export default function indexJs (names) {
  return names
    | mapValues((name: string): string => `export {default as ${name}} from "${toFullName(name)}"`)
    | join("\n")
    | finalNewline
}
