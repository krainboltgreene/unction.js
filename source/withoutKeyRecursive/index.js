import {empty} from "ramda"
import {merge} from "ramda"
import {type} from "ramda"
import {objOf} from "ramda"
import reduceWithValueKey from "@unction/reducewithvaluekey"

export default function withoutKeyRecursive (key: KeyType): Function {
  return function withoutKeyRecursiveKey (original: IterableType): IterableType {
    return reduceWithValueKey(
      function withoutKeyRecursiveKeyIterable (accumulated: IterableType): Function {
        const accumulatedMerge = merge(accumulated)

        return function withoutKeyRecursiveKeyIterableValue (current: any): Function {
          const isObject = type(current) === "Object"
          const isArray = type(current) === "Array"
          const isObjectOrArray = isObject || isArray

          return function withoutKeyRecursiveKeyIterableValueKey (index: KeyType): IterableType {
            if (key === index) {
              return accumulated
            }

            if (isObjectOrArray) {
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
