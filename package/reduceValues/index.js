import reduceWithValueKey from "@unction/reducewithvaluekey"

export default function reduceValues (unction: AccumulatedType => ValueType => AccumulatedType): Function {
  return reduceWithValueKey((accumulated: AccumulatedType): Function => (value: ValueType): Function => (): AccumulatedType => unction(accumulated)(value))
}
