export default function prepend (left: any): Function {
  return function prependLeft (right: Array<any>): Array<any> {
    return [left, ...right]
  }
}
