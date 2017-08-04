import fresh from "@unction/fresh"
import {keys} from "ramda"
import {uniq} from "ramda"
import type from "@unction/type"
import attach from "@unction/attach"
import reduceValues from "@unction/reducevalues"

export default function zip (left: IterableType): Function {
  return function zipLeft (right: IterableType): IterableType {
    if (type(left) !== type(right)) {
      throw new Error("left and right were not the same iterable type")
    }

    const uniqueKeys = uniq([...keys(left), ...keys(right)])

    return reduceValues((accumulated: IterableType): Function => (point: KeyType): IterableType => {
      return attach(point)([left[point], right[point]])(accumulated)
    })(
      fresh(right)
    )(
      uniqueKeys
    )
  }
}
