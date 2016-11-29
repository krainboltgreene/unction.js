import {curryN} from "ramda"
import {reduce} from "ramda"
import {flip} from "ramda"
import {reverse} from "ramda"
import {objOf} from "ramda"

const ARGUMENTS = 2

export default curryN(ARGUMENTS, function nestedObjOf (path, value) {
  return reduce(flip(objOf), value, reverse(path))
})
