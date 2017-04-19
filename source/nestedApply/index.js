import {reduce} from "ramda"
import {inc} from "ramda"
import upTo from "@unction/upTo"

const thrush = (unction: any => any): Function => (value: any): any => unction(value)

export default function nestedApply (application: any => any): Function {
  const applicated = thrush(application)
  const reduceApplication = reduce(applicated)

  return function nestedApplyApplication (inner: (any => any => any)): IterableType => IterableType {
    const reduceApplicationInner = reduceApplication(inner)

    return function nestedApplyApplicationInitial (depth: number): any {
      return reduceApplicationInner(upTo(inc(depth)))
    }
  }
}
