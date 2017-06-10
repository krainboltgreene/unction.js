import isArray from "@unction/isarray"
import isObject from "@unction/isobject"

export default function reduceWithValueKey (unction: AccumulatedType => ValueType => KeyType => AccumulatedType): Function {
  return function reduceWithValueKeyUnction (initial: InitialType): Function {
    return function reduceWithValueKeyUnctionInitial (iterable: IterableType): AccumulatedType {
      if (isArray(iterable)) {
        return iterable.reduce((accumulated: AccumulatedType, value: ValueType, key: KeyType): AccumulatedType => unction(accumulated)(value)(key), initial)
      }

      if (isObject(iterable)) {
        return Object.entries(iterable).reduce((accumulated: AccumulatedType, [key, value]: [KeyType, ValueType]): AccumulatedType => unction(accumulated)(value)(key), initial)
      }

      throw new Error("couldn't figure out how to reduce this type")
    }
  }
}
