export default function flip (unction: any => any): Function {
  return function flipUnction (left: any): Function {
    return function flipUnctionValue (right: any): any {
      return unction(right)(left)
    }
  }
}
