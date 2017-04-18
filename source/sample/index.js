import {head} from "ramda"
import shuffle from "ramda-shuffle"

export default function sample (list: string | Array<any>): string | Array<any> {
  return head(shuffle(list))
}
