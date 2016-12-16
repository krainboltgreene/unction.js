import {reject} from "ramda"
import {isNil} from "ramda"

// Collection -> Collection
export default function compact (collection) {
  return reject(isNil, collection)
}
