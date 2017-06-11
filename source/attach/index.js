import isObject from "@unction/isobject"
import isArray from "@unction/isarray"

export default function attach (key: KeyType): Function {
  return function attachKey (value: VaueType): Function {
    return function attachKeyValue (iterable: IterableType): IterableType {
      if (isObject(iterable)) {
        return {
          ...iterable,
          [key]: value,
        }
      }

      if (isArray(iterable)) {
        return iterable.slice(key, 0, value)
      }

      throw new Error("Couldn't figure out how to attach a value to this iterable")
    }
  }
}
