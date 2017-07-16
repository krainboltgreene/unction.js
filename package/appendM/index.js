export default function appendM (value: any): Function {
  return function appendMValue (list: Array<any>): Array<any> {
    list.push(value)

    return list
  }
}
