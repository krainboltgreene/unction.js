import append from "@unction/append"
import couple from "@unction/couple"
import fresh from "@unction/fresh"
import reduceValues from "@unction/reducevalues"

export default function partition (predicate: PredicateType): Function {
  return function partitionPredicate (iterable: IterableType): [IterableType, IterableType] {
    return reduceValues((accumulation: [IterableType, IterableType]): Function => (value: ValueType): [IterableType, IterableType] => {
      if (predicate(value)) {
        return couple(append(value)(accumulation[0]))(accumulation[1])
      }

      return couple(accumulation[0])(append(value)(accumulation[1]))
    })(couple(fresh(iterable))(fresh(iterable)))(iterable)
  }
}
