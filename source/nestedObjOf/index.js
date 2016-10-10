import {curryN} from "ramda"
import {reduce} from "ramda"
import {flip} from "ramda"
import {reverse} from "ramda"
import {objOf} from "ramda"

export default curryN(2, function nestedObjOf (path, value) {
  return reduce(flip(objOf), value, reverse(path))
})
