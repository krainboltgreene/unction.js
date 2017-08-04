export default function always (value: ValueType): Function {
  return function alwaysValue (): ValueType {
    return value
  }
}
