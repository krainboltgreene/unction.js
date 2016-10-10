import {curryN} from "ramda"
import {merge} from "ramda"
import {objOf} from "ramda"
import {isArrayLike} from "ramda"
import nestedObjOf from "../nestedObjOf"

const ARGUMENTS = 3

export default curryN(ARGUMENTS, function computedProp (computer, keyOrPath, structure) {
  if (isArrayLike(keyOrPath)) {
    return merge(structure, nestedObjOf(keyOrPath, computer(structure)))
  }

  return merge(structure, objOf(keyOrPath, computer(structure)))
})
