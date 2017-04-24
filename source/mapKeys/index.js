import {empty} from "ramda"

export default function mapKeys (unction: any => any): Function {
  return function mapKeysUnction (iterable: IterableType): IterableType {
    const transformed = empty(iterable)

    iterable.forEach(function mapKeysUnctionIterable (value: any, key: any) {
      transformed[unction(key)] = value
    })

    return transformed
  }
}
