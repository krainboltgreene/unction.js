/* eslint-disable immutable/no-let */
import forEach from "@unction/foreach"

export default function reduceValues (unction: any => any => any): Function {
  return function reduceValuesUnction (initial: any): Function {
    return function reduceValuesUnctionInitial (iterable: IterableType): any {
      let current = initial

      forEach((item: any): Function => () => {
        current = unction(current)(item)
      })(iterable)

      return current
    }
  }
}
