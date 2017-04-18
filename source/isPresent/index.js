import {isNil} from "ramda"

export default function isPresent (value: any): boolean {
  return !isNil(value)
}
