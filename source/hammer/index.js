import {merge} from "ramda"
import {prop} from "ramda"
import {omit} from "ramda"
import {type} from "ramda"

export default function hammer (key: KeyType): Function {
  const propKey = prop(key)
  const omitKey = omit(key)

  return function hammerKey (iterable: IterableType): IterableType {
    if (type(iterable) !== "Object" && type(iterable) !== "Array") {
      throw new Error(`hammer only works on an Object or Array, but the set was a ${type(iterable)}`)
    }

    const only = propKey(iterable)
    const without = omitKey(iterable)

    if (type(only) !== "Object" && type(only) !== "Array") {
      throw new Error(`hammer only works on an Object or Array, but the subset was a ${type(iterable)}`)
    }

    return merge(without, only)
  }
}
