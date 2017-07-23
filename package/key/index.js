/* eslint-disable no-undefined */
import isIterable from "@unction/isiterable"

export default function key (name: KeyType): Function {
  return function keyProperty (iterable: IterableType): ValueType {
    if (isIterable(iterable)) {
      return iterable[name]
    }

    return undefined
  }
}
