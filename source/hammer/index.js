import {merge} from "ramda"
import {prop} from "ramda"
import {omit} from "ramda"
import {type} from "ramda"
import isIterable from "@unction/isiterable"

export default function hammer (key: KeyType): Function {
  const propKey = prop(key)
  const omitKey = omit(key)

  return function hammerKey (iterable: IterableType): IterableType {
    if (!isIterable(iterable)) {
      throw new Error(`hammer only works on an Object or Array, but the set was a ${type(iterable)}`)
    }

    const only = propKey(iterable)
    const without = omitKey(iterable)

    if (!isIterable(only)) {
      throw new Error(`hammer only works on an Object or Array, but the subset was a ${type(iterable)}`)
    }

    return merge(without, only)
  }
}
