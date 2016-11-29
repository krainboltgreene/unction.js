import {mergeWith} from "ramda"
import {type} from "ramda"
import {concat} from "ramda"
import {curryN} from "ramda"

const ARGUMENTS = 2

export default curryN(ARGUMENTS, function mergeDeep (left, right) {
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
})
