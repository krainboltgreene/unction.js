import {test} from "ramda"
import escapeStringRegexp from "escape-string-regexp"

export default function startsWith (subset: string): Function {
  const escaped = escapeStringRegexp(subset)
  const beginning = `^${escaped}`

  return test(new RegExp(beginning))
}
