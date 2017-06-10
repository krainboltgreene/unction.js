import mapWithValueKey from "@unction/mapwithvaluekey"

export default function mapValues (unction: ValueType => ValueType): Function {
  return mapWithValueKey((value: ValueType): Function => (): ValueType => unction(value))
}
