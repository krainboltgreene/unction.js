import {curryN} from "ramda"
import {merge} from "ramda"
import {prop} from "ramda"
import {omit} from "ramda"
import {type} from "ramda"

export default curryN(2, function hammer (key, pairs) {
  if (type(pairs) !== "Object") {
    throw new Error(`hammer only works on an Object, but the second argument was a ${type(pairs)}`)
  }

  const onlyKey = prop(key, pairs)
  const withoutKey = omit(key, pairs)

  if (type(onlyKey) !== "Object") {
    throw new Error(`The hammered property ${key} was not an Object it was a ${type(onlyKey)}`)
  }

  return merge(withoutKey, onlyKey)
})
