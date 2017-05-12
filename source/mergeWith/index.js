import {empty} from "ramda"
import forEach from "@unction/foreach"

export default function mergeWith (unction: any => any => any): Function {
  return function mergeWithUnction (left: IterableType): Function {
    const combine = empty(left)

    forEach((value: any): Function => (key: KeyType) => {
      combine[key] = value
    })(left)

    return function mergeWithUnctionLeft (right: IterableType): IterableType {
      forEach((value: any): Function => (key: KeyType) => {
        if (combine[key]) {
          combine[key] = unction(left[key])(right[key])
        } else {
          combine[key] = value
        }
      })(right)

      return combine
    }
  }
}
