import reduceValues from "@unction/reducevalues"
import mergeLeft from "@unction/mergeleft"
import fresh from "@unction/fresh"

const FIRST = 0

export default function mergeAllLeft (iterables: Array<IterableType<T>>): IterableType {
  return reduceValues(mergeLeft)(fresh(iterables[FIRST]))(iterables)
}
