import {fromPairs} from "ramda"
import {map} from "ramda"
import {adjust} from "ramda"
import {toPairs} from "ramda"
import {type} from "ramda"

export default function mapKeys (unction: KeyType => any): Function {
  if (type(unction) !== "Function") {
    throw new Error(`mapKeys only works with an Function, but the unction argument was a ${type(unction)}`)
  }
  const callWithKey = adjust(unction, 0)
  const overKey = map(callWithKey)

  return function mapKeysUnction (iterable: IterableType): IterableType {
    if (type(iterable) !== "Object") {
      throw new Error(`mapKeys only works on an Object, but the iterable argument was a ${type(iterable)}`)
    }

    return fromPairs(overKey(toPairs(iterable)))
  }
}
