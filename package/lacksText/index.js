import {test} from "ramda"
import {complement} from "ramda"
import escapeStringRegexp from "escape-string-regexp"

export default function lacksText (subset: string | RegExp): Function {
  const escaped = escapeStringRegexp(subset)
  const pattern = test(new RegExp(escaped))
  const patternMatched = complement(pattern)

  return function lacksTextSubset (set: string): boolean {
    return patternMatched(set)
  }
}
