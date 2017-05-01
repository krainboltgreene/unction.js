/* eslint-disable immutable/no-let */
import iteratorFunction from "@unction/iteratefunction"

export default function reduceValues (unction: any => any => any): Function {
  return function reduceValuesUnction (initial: any): Function {
    return function reduceValuesUnctionInitial (iterable: IterableType): any {
      let current = initial

      iteratorFunction(iterable)(function reduceValuesUnctionInitialIterable (item: any) {
        current = unction(current)(item)
      })

      return current
    }
  }
}
