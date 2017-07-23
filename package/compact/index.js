import {reject} from "ramda"
import {isNil} from "ramda"

export default function compact (collection: Array<any>): Array<mixed> {
  return reject(isNil)(collection)
}
