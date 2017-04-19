import {concat} from "ramda"
import {uniq} from "ramda"
import {map} from "ramda"
import {toPairs} from "ramda"
import {fromPairs} from "ramda"
import {contains} from "ramda"
import pairsKeys from "@unction/pairskeys"

export default function mergeWithKey (unction: IterableType => IterableType => any): Function {
  return function mergeWithKeyUnction (left: IterableType): Function {
    const leftPairs = toPairs(left)
    const leftKeys = pairsKeys(leftPairs)
    const concatLeft = concat(leftKeys)

    return function mergeWithKeyUnctionLeft (right: IterableType): IterableType {
      const rightPairs = toPairs(right)
      const rightKeys = pairsKeys(rightPairs)
      const keys = uniq(concatLeft(rightKeys))
      const merge = (key: KeyType): any => {
        const inLeft = contains(key)(leftKeys)
        const inRight = contains(key)(rightKeys)
        const leftValue = left[key]
        const rightValue = right[key]

        if (inLeft && inRight) {
          return [key, unction(key)(leftValue)(rightValue)]
        }

        if (inLeft) {
          return [key, leftValue]
        }

        return [key, rightValue]
      }

      return fromPairs(map(merge)(keys))
    }
  }
}
