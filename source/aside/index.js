import {pipe} from "ramda"

export default function aside (unctions: Array<any => any>): Function {
  const journey = pipe(...unctions)

  return function asideUnctions (value: any): any {
    journey(value)

    return value
  }
}
