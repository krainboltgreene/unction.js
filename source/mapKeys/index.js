/* eslint-disable immutable/no-let */
import {empty} from "ramda"
import iteratorFunction from "@unction/iterateFunction"

export default function mapKeys (unction: any => any): Function {
  return function mapKeysUnction (iterable: IterableType): IterableType {
    const transformed = empty(iterable)

    iteratorFunction(iterable)(function mapKeysUnctionIterable (value: any, key: any) {
      transformed[unction(key)] = value
    })

    return transformed
  }
}
