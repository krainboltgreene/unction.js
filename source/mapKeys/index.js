import mapWithValueKey from "@unction/mapwithvaluekey"

export default function mapValues (unction: ValueType => ValueType): Function {
  return mapWithValueKey((): Function => (key: KeyType): ValueType => unction(key))
}
