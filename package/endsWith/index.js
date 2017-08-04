import {test} from "ramda"
import escapeStringRegexp from "escape-string-regexp"

export default function endsWith (subset: string): Function {
  const escaped = escapeStringRegexp(subset)
  const ending = `${escaped}$`

  return function endsWithSubset (set: string): boolean {
    return test(new RegExp(ending))(set)
  }
}
