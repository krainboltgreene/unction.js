/* eslint-disable immutable/no-let */
import iteratorFunction from "@unction/iterateFunction"

export default function reduce (unction: any => any => any): Function {
  return function reduceUnction (initial: any): Function {
    return function reduceUnctionInitial (iterable: IterableType): any {
      let current = initial

      iteratorFunction(iterable)(function reduceUnctionInitialIterable (item: any) {
        current = unction(current)(item)
      })

      return current
    }
  }
}
