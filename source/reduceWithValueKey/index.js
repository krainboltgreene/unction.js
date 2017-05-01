/* eslint-disable immutable/no-let */
import iteratorFunction from "@unction/iteratefunction"

export default function reduceWithValueKey (unction: any => any => any): Function {
  return function reduceWithValueKeyUnction (initial: any): Function {
    return function reduceWithValueKeyUnctionInitial (iterable: IterableType): any {
      let current = initial

      iteratorFunction(iterable)(function reduceWithValueKeyUnctionInitialIterable (item: any, key: KeyType) {
        current = unction(current)(item)(key)
      })

      return current
    }
  }
}
