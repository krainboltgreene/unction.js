import {all} from "ramda"
import couple from "@unction/couple"
import isObject from "@unction/isobject"
import isArray from "@unction/isarray"
import isPresent from "@unction/ispresent"

const isArrayPair = all(isArray)
const isObjectPair = all(isObject)

export default function mergeLeft (left: IterableType): Function {
  const pairWithLeft = couple(left)

  return function mergeLeftLeft (right: IterableType): IterableType {
    const pair = pairWithLeft(right)

    if (!isPresent(left) || !isPresent(left)) {
      throw new Error("left or right was not an iterable")
    }

    if (left.constructor.name !== right.constructor.name) {
      throw new Error("left and right weren't the same type")
    }

    if (isArrayPair(pair)) {
      return [
        ...right,
        ...left,
      ]
    }

    if (isObjectPair(pair)) {
      return {
        ...right,
        ...left,
      }
    }

    throw new Error("Couldn't figure out how to merge left and right")
  }
}
