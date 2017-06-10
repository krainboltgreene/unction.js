import append from "@unction/append"
import isArray from "@unction/isarray"
import isObject from "@unction/isobject"
import mergeRight from "@unction/mergeright"
import reduceWithValueKey from "@unction/reducewithvaluekey"

export default function mapWithValueKey (unction: ValueType => ValueType): Function {
  return function mapValuesUnction (iterable: IterableType): IterableType {
    if (isArray(iterable)) {
      return reduceWithValueKey(
        (accumulated: AccumulatedType): Function => (value: ValueType): Function => (key: KeyType): Array<ValueType> => append(unction(value)(key))(accumulated)
      )(
        []
      )(
        iterable
      )
    }

    if (isObject(iterable)) {
      return reduceWithValueKey(
        (accumulated: AccumulatedType): Function => (value: ValueType): Function => (key: KeyType): {[KeyType]: ValueType} => mergeRight({[key]: unction(value)(key)})(accumulated)
      )(
        {}
      )(
        iterable
      )
    }

    throw new Error("Couldn't figure out how to map over this iterable")
  }
}
