/* eslint-disable immutable/no-let */
import {empty} from "ramda"
import forEach from "@unction/foreach"

export default function mapValues (unction: any => any): Function {
  return function mapValuesUnction (iterable: IterableType): IterableType {
    const transformed = empty(iterable)

    forEach((value: any): Function => (key: KeyType) => {
      transformed[key] = unction(value)
    })(iterable)

    return transformed
  }
}
