/* eslint-disable immutable/no-let */
import {empty} from "ramda"
import iteratorFunction from "@unction/iteratefunction"

export default function mapValues (unction: any => any): Function {
  return function mapValuesUnction (iterable: IterableType): IterableType {
    const transformed = empty(iterable)

    iteratorFunction(iterable)(function mapValuesUnctionIterable (value: any, key: any) {
      transformed[key] = unction(value)
    })

    return transformed
  }
}
