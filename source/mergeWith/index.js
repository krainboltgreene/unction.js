import reduceWithValueKey from "@unction/reducewithvaluekey"

export default function mergeWith (unction: Function): Function {
  return reduceWithValueKey((accumulated: AccumulatedType): Function => (value: ValueType): Function => (key: KeyType): IterableType => {
    if (accumulated[key]) {
      return {
        ...accumulated,
        [key]: unction(key)(value)(accumulated[key]),
      }
    }

    return {
      ...accumulated,
      [key]: value,
    }
  })
}
