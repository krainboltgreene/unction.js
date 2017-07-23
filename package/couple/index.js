export default function couple (left: any): Function {
  return function coupleLeft (right: any): [any, any] {
    return [left, right]
  }
}
