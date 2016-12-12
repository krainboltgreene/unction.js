import {always} from "ramda"
import resolveP from "../resolveP"
import thenP from "../thenP"

export default function tapP (ƒunction) {
  return function tapPWithFunction (value) {
    return thenP(always(value), resolveP(ƒunction(value)))
  }
}
