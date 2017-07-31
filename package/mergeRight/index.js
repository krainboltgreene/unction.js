import type from "@unction/type"
import isIterable from "@unction/isiterable"
import xstream from "xstream"

export default function mergeRight (left: IterableType): Function {
  if (!isIterable(left)) {
    throw new Error("left is not an iterable")
  }

  const leftType = type(left)

  return function mergeRightLeft (right: IterableType): IterableType {
    if (!isIterable(right)) {
      throw new Error("right was not an iterable")
    }

    if (left.constructor.name !== right.constructor.name) {
      throw new Error("left and right weren't the same type")
    }

    switch (leftType) {
      case "Array": {
        return [
          ...left,
          ...right,
        ]
      }
      case "Object": {
        return {
          ...left,
          ...right,
        }
      }
      case "Map": {
        return new Map()
      }
      case "WeakMap": {
        return new WeakMap()
      }
      case "Set": {
        return new Set()
      }
      case "WeakSet": {
        return new WeakSet()
      }
      case "Stream": {
        return new xstream.merge(left, right)
      }

      default: {
        throw new Error(`left wasn't an iterable type we know how to merge: ${leftType}`)
      }
    }
  }
}
