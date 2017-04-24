import {empty} from "ramda"

/* eslint-disable immutable/no-let */
export default function map (unction: any => any): Function {
  return function mapUnction (iterable: IterableType): IterableType {
    const transformed = empty(iterable)

    iterable.forEach(function mapUnctionIterable (value: any, key: any) {
      transformed[key] = unction(value)
    })

    return transformed
  }
}
