/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import mapValues from "@unction/mapvalues"
import reduceValues from "@unction/reducevalues"
import mergeRight from "@unction/mergeright"

import toFullName from "../../../shared/toFullName"

export default function dependencies (names) {
  return names
    | mapValues((name: string): object => ({[toFullName(name)]: "*"}))
    | reduceValues(mergeRight)({})
}
