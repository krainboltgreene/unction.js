import reduceWithValueKey from "@unction/reducewithvaluekey"
import attach from "@unction/attach"

export default function mergeWith (unction: ValueType => ValueType => ValueType): Function {
  return reduceWithValueKey((accumulated: AccumulatedType): Function => (value: ValueType): Function => (key: KeyType): IterableType => {
    if (accumulated[key]) {
      return {
        ...accumulated,
        [key]: unction(accumulated[key])(value)(key),
      }
    }

    return attach(key)(value)(accumulated)
  })
}
