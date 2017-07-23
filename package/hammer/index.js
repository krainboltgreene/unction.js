import keyChain from "@unction/keychain"
import {omit} from "ramda"
import {type} from "ramda"
import isIterable from "@unction/isiterable"
import mergeRight from "@unction/mergeright"

export default function hammer (key: KeyType): Function {
  const keychain = keyChain([key])
  const omitKey = omit([key])

  return function hammerKey (iterable: IterableType): IterableType {
    if (!isIterable(iterable)) {
      throw new Error(`hammer only works on an Object or Array, but the set was a ${type(iterable)}`)
    }

    const only = keychain(iterable)
    const without = omitKey(iterable)

    if (!isIterable(only)) {
      throw new Error(`hammer only works on an Object or Array, but the subset was a ${type(iterable)}`)
    }

    return mergeRight(without)(only)
  }
}
