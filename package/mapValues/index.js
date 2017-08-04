import mapValuesWithValueKey from "@unction/mapvalueswithvaluekey"

export default function mapValues (unction: ValueType => ValueType): Function {
  return mapValuesWithValueKey((value: ValueType): Function => (): ValueType => unction(value))
}
