export default function thrush (unction: any => any): Function {
  return function thrushUnction (value: any): any {
    return unction(value)
  }
}
