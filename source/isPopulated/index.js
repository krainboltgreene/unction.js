/* eslint-disable no-magic-numbers */
import isPresent from "@unction/ispresent"

export default function isPopulated (list: IterableType): boolean {
  if (isPresent(list)) {
    if (list.length) {
      return list.length !== 0
    }

    return Object.keys(list).length !== 0
  }

  return false
}
