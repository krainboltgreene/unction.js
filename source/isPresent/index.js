import {isNil} from "ramda"

export default function isPresent (value) {
  return !isNil(value)
}
