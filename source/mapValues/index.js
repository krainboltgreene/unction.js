/* eslint-disable immutable/no-let */
import {empty} from "ramda"
import iteratorFunction from "@unction/iterateFunction"

export default function mapValues (unction: any => any): Function {
  return function mapValuesUnction (iterable: IterableType): IterableType {
    let transformed = empty(iterable)

    iteratorFunction(iterable)(function mapValuesUnctionIterable (value: any, key: any) {
      transformed = {
        ...transformed,
        [key]: unction(value)
      }
    })

    return transformed
  }
}
