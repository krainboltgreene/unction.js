// > ? Number:a -> Array of Number:b
//
// Just takes a maximum and produces an array of 1 to that number.
import {range} from "ramda"

const MINIMUM = 1

export default function upTo (maximum: number): Array<number> {
  return range(MINIMUM, maximum)
}
