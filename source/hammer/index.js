import {curryN} from "ramda"
import {mergeAll} from "ramda"
import {prop} from "ramda"
import {omit} from "ramda"
import {type} from "ramda"

export default curryN(2, function hammer (key, pairs) {
  if (type(pairs) !== "Object") {
    throw new Error(`hammer only works on an Object, but the second argument was a ${type(pairs)}`)
  }

  const withoutKey = omit(key, pairs)
  const subvalue = prop(key, pairs)

  if (type(subvalue) !== "Object") {
    throw new Error(`The hammered property ${key} was not an Object it was a ${type(subvalue)}`)
  }

  return mergeAll(withoutKey, subvalue)
})
