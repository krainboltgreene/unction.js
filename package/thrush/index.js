export default function thrush (value: any): Function {
  return function thrushUnction (unction: any => any): any {
    return unction(value)
  }
}
