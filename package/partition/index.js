import append from "@unction/append"
import couple from "@unction/couple"
import fresh from "@unction/fresh"
import reduceValues from "@unction/reducevalues"

export default function partition (predicate: PredicateType): Function {
  return function partitionPredicate (iterable: IterableType): [IterableType, IterableType] {
    const freshIterable = fresh(iterable)
    const initalIterablePair = [
      freshIterable,
      freshIterable,
    ]

    return reduceValues((accumulation: [IterableType, IterableType]): Function => (value: ValueType): [IterableType, IterableType] => {
      const [consequent, alternate] = accumulation
      const appendedValue = append(value)

      if (predicate(value)) {
        return couple(appendedValue(consequent))(alternate)
      }

      return couple(consequent)(appendedValue(alternate))
    })(initalIterablePair)(iterable)
  }
}
