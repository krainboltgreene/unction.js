import iteratorFunction from "@unction/iteratefunction"
import {empty} from "ramda"

export default function mapWithValueKey (unction: any => KeyType => any): Function {
  return function mapWithValueKeyUnction (iterable: IterableType): IterableType {
    const transformed = empty(iterable)

    iteratorFunction(iterable)(function mapWithValueKeyUnctionIterable (value: any, key: any) {
      transformed[key] = unction(value)(key)
    })

    return transformed
  }
}
