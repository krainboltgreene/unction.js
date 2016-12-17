import {take} from "ramda"
import {curryN} from "ramda"
import shuffle from "../shuffle"

const ARGUMENTS = 2

export default curryN(ARGUMENTS, function sample (size, list) {
  return take(size, shuffle(list))
})
