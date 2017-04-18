import {last} from "ramda"
import {map} from "ramda"

export default function pairsValues (pairs: Array<[KeyType, any]>): Array<any> {
  return map(last, pairs)
}
