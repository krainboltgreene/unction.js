import attach from "@unction/attach"
import isArray from "@unction/isarray"
import isObject from "@unction/isobject"
import reduceWithValueKey from "@unction/reducewithvaluekey"

export default function mapValuesWithValueKey (unction: ValueType => ValueType): Function {
  return function mapValuesWithValueKeyUnction (iterable: IterableType): IterableType {
    const reducedWithUnction = reduceWithValueKey(
      (accumulated: AccumulatedType): Function => (value: ValueType): Function => (key: KeyType): {[KeyType]: ValueType} => attach(key)(unction(value)(key))(accumulated)
    )

    if (isArray(iterable)) {
      return reducedWithUnction(
        []
      )(
        iterable
      )
    }

    if (isObject(iterable)) {
      return reducedWithUnction(
        {}
      )(
        iterable
      )
    }

    throw new Error("Couldn't figure out how to map over this iterable")
  }
}
