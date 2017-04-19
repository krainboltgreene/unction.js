import {type} from "ramda"
import {concat} from "ramda"
import mergeWith from "@unction/mergewith"

export default function mergeDeepLeft (left: IterableType): Function {
  return function mergeDeepLeftLeft (right: IterableType): IterableType {
    const leftType = type(left)
    const rightType = type(right)

    if (leftType === "Array" && rightType === "Array") {
      return concat(right)(left)
    }

    if (leftType === "Object" && rightType === "Object") {
      return mergeWith(mergeDeepLeft)(left)(right)
    }

    return left
  }
}
