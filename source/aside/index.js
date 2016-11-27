import {tap} from "ramda"
import {pipe} from "ramda"

export default function aside (...ƒunctions) {
  return tap(pipe(...ƒunctions))
}
