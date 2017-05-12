/* eslint-disable immutable/no-let */
import forEach from "@unction/foreach"

export default function reduceWithValueKey (unction: any => any => any): Function {
  return function reduceWithValueKeyUnction (initial: any): Function {
    return function reduceWithValueKeyUnctionInitial (iterable: IterableType): any {
      let current = initial

      forEach((value: any): Function => (key: KeyType) => {
        current = unction(current)(value)(key)
      })(iterable)

      return current
    }
  }
}
