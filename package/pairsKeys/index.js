import {head} from "ramda"
import {map} from "ramda"

export default function pairsKeys (pairs: Array<[string, any]>): Array<string> {
  return map(head, pairs)
}
