export default function applicator (unction: ValueType => any): Function {
  return function applicatorUnction (value: ValueType): any {
    return unction(value)
  }
}
