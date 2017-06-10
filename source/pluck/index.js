import {path} from "ramda"
import mapValues from "@unction/mapvalues"

export default function pluck (pathing: PathType): Function {
  return function pluckPathing (iterable: IterableType): IterableType {
    return mapValues(path(pathing))(iterable)
  }
}
