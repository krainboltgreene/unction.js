import reduceValues from "@unction/reducevalues"
import mergeRight from "@unction/mergeright"
import fresh from "@unction/fresh"

const FIRST = 0

export default function mergeAllRight (iterables: Array<IterableType<T>>): IterableType {
  return reduceValues(mergeRight)(fresh(iterables[FIRST]))(iterables)
}
