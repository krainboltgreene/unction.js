import {test} from "ramda"
import {complement} from "ramda"
import escapeStringRegexp from "escape-string-regexp"

export default function lacksText (subset: string | regexp): Function {
  const escaped = escapeStringRegexp(subset)
  const pattern = test(new RegExp(escaped))

  return function lacksTextSubset (set: string): boolean {
    return complement(pattern)(set)
  }
}
