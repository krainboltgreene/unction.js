import reduceValues from "@unction/reducevalues"
import applicator from "@unction/applicator"

export default function splat (unction: ValueType => any): Function {
  return reduceValues(applicator)(unction)
}
