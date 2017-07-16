import mapKeysWithValueKey from "@unction/mapkeyswithvaluekey"

export default function mapKeys (unction: ValueType => ValueType): Function {
  return mapKeysWithValueKey((): Function => (key: KeyType): KeyType => unction(key))
}
