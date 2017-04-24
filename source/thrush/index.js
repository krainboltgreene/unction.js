export default function thrush (unction: any => any): Function {
  return function coupleLeft (value: any): any {
    return unction(value)
  }
}
