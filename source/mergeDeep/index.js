import {mergeWith} from "ramda"
import {type} from "ramda"
import {concat} from "ramda"

export default function mergeDeep (left, right) {
  if (type(left) !== type(right)) {
    return right
  }

  if (type(right) === "Object") {
    return mergeWith(mergeDeep, left, right)
  }

  if (type(right) === "Array") {
    return concat(left, right)
  }

  return right
}
