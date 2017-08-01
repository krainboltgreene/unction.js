/* eslint-disable no-magic-numbers */
import isPresent from "@unction/ispresent"

export default function isPopulated (value: mixed): boolean {
  if (isPresent(value)) {
    if (value.length) {
      return value.length !== 0
    }

    return Object.keys(value).length !== 0
  }

  return false
}
