import always from "@unction/always"
import itself from "@unction/itself"
import mapValues from "@unction/mapvalues"
import ifThenElse from "@unction/ifthenelse"

export default function replaceWhen (predicate: PredicateType): Function {
  return function replaceWhenPredicate (value: ValueType): Function {
    return mapValues(ifThenElse(predicate)(always(value))(itself))
  }
}
