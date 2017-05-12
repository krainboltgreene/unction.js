import forEach from "@unction/foreach"
import {empty} from "ramda"

export default function mapWithValueKey (unction: any => KeyType => any): Function {
  return function mapWithValueKeyUnction (iterable: IterableType): IterableType {
    const transformed = empty(iterable)

    forEach((value: any): Function => (key: KeyType) => {
      transformed[key] = unction(value)(key)
    })(iterable)

    return transformed
  }
}
