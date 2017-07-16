export default function append (left: any): Function {
  return function appendLeft (right: Array<any>): Array<any> {
    return [...right, left]
  }
}
