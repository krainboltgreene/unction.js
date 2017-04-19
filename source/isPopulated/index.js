import {isEmpty} from "ramda"
import compact from "@unction/compact"

export default function isPopulated (list: IterableType): boolean {
  return !isEmpty(compact(list))
}
