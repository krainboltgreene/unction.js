import {path} from "ramda"
import {juxt} from "ramda"
import mapValues from "@unction/mapvalues"

export default function plucks (paths: Array<PathType>): Function {
  return mapValues(juxt(mapValues(path)(paths)))
}
