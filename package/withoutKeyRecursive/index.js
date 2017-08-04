import fresh from "@unction/fresh"
import mergeRight from "@unction/mergeright"
import {either} from "ramda"
import recordFrom from "@unction/recordfrom"
import reduceWithValueKey from "@unction/reducewithvaluekey"
import isObject from "@unction/isobject"
import isArray from "@unction/isarray"

const isEitherObjectOrArray = either(isObject)(isArray)

export default function withoutKeyRecursive (key: KeyType): Function {
  return function withoutKeyRecursiveKey (original: IterableType): IterableType {
    return reduceWithValueKey(
      function withoutKeyRecursiveKeyIterable (accumulated: IterableType): Function {
        const accumulatedMerge = mergeRight(accumulated)

        return function withoutKeyRecursiveKeyIterableValue (current: any): Function {
          const isIterable = isEitherObjectOrArray(current)

          return function withoutKeyRecursiveKeyIterableValueKey (index: KeyType): IterableType {
            if (key === index) {
              return accumulated
            }

            if (isIterable) {
              return accumulatedMerge(recordFrom([index])(withoutKeyRecursive(key)(current)))
            }

            return accumulatedMerge(recordFrom([index])(current))
          }
        }
      }
    )(
      fresh(original)
    )(
      original
    )
  }
}
