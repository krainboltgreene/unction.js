import {range} from "ramda"

const MINIMUM = 1

const rangeMinimum = range(MINIMUM)

export default function upTo (maximum: number): Array<number> {
  return rangeMinimum(maximum)
}
