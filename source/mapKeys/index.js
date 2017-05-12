/* eslint-disable immutable/no-let */
import {empty} from "ramda"
import forEach from "@unction/foreach"

export default function mapKeys (unction: any => any): Function {
  return function mapKeysUnction (iterable: IterableType): IterableType {
    const transformed = empty(iterable)

    forEach((value: any): Function => (key: KeyType) => {
      transformed[unction(key)] = value
    })(iterable)

    return transformed
  }
}
