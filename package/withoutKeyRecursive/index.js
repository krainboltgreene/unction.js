import {empty} from "ramda"
import {merge} from "ramda"
import {either} from "ramda"
import {objOf} from "ramda"
import reduceWithValueKey from "@unction/reducewithvaluekey"
import isType from "@unction/istype"

const isEitherObjectOrArray = either(isType("Object"))(isType("Array"))

export default function withoutKeyRecursive (key: KeyType): Function {
  return function withoutKeyRecursiveKey (original: IterableType): IterableType {
    return reduceWithValueKey(
      function withoutKeyRecursiveKeyIterable (accumulated: IterableType): Function {
        const accumulatedMerge = merge(accumulated)

        return function withoutKeyRecursiveKeyIterableValue (current: any): Function {
          const isIterable = isEitherObjectOrArray(current)

          return function withoutKeyRecursiveKeyIterableValueKey (index: KeyType): IterableType {
            if (key === index) {
              return accumulated
            }

            if (isIterable) {
              return accumulatedMerge(objOf(index)(withoutKeyRecursive(key)(current)))
            }

            return accumulatedMerge(objOf(index)(current))
          }
        }
      }
    )(
      empty(original)
    )(
      original
    )
  }
}
