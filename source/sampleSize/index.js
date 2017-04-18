import {take} from "ramda"
import shuffle from "ramda-shuffle"

export default function sample (size: number): Function {
  const takeSize = take(size)

  return function sampleSize (list: string | Array<any>): string | Array<any> {
    return takeSize(shuffle(list))
  }
}
