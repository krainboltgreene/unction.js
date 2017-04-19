import {type} from "ramda"
import {concat} from "ramda"
import mergeWith from "@unction/mergeWith"

export default function mergeDeepRight (left: IterableType): Function {
  return function mergeDeepRightLeft (right: IterableType): IterableType {
    const leftType = type(left)
    const rightType = type(right)

    if (leftType === "Array" && rightType === "Array") {
      return concat(left)(right)
    }

    if (leftType === "Object" && rightType === "Object") {
      return mergeWith(mergeDeepRight)(left)(right)
    }

    return right
  }
}
