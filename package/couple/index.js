export default function couple (left: mixed): Function {
  return function coupleLeft (right: mixed): [mixed, mixed] {
    return [left, right]
  }
}
