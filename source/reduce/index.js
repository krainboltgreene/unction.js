/* eslint-disable immutable/no-let */
export default function reduce (unction: any => any => any): Function {
  return function reduceUnction (initial: any): Function {
    return function reduceUnctionInitial (iterable: IterableType): any {
      let current = initial

      iterable.forEach(function reduceUnctionInitialIterable (item: any) {
        current = unction(current)(item)
      })

      return current
    }
  }
}
