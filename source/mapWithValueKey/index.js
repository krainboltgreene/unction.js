import {empty} from "ramda"

export default function mapWithValueKey (unction: any => KeyType => any): Function {
  return function mapWithValueKeyUnction (iterable: IterableType): IterableType {
    const transformed = empty(iterable)

    iterable.forEach(function mapWithValueKeyUnctionIterable (value: any, key: any) {
      transformed[key] = unction(value)(key)
    })

    return transformed
  }
}
