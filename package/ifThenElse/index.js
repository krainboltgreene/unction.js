export default function ifThenElse (predicate: PredicateType): Function {
  return function ifThenElsePredicate (consequent: any => any): Function {
    return function ifThenElsePredicateConsequent (alternative: any => any): any {
      return function ifThenElsePredicateConsequentAlternative (value: any): any {
        if (predicate(value)) {
          return consequent(value)
        }

        return alternative(value)
      }
    }
  }
}
