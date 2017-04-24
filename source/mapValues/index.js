import {empty} from "ramda"

export default function mapValues (unction: any => any): Function {
  return function mapValuesUnction (iterable: IterableType): IterableType {
    const transformed = empty(iterable)

    iterable.forEach(function mapValuesUnctionIterable (value: any, key: any) {
      transformed[key] = unction(value)
    })

    return transformed
  }
}
