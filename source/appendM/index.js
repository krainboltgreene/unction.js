// ? Anything:a -> Array:b -> Array:ab
import {curryN} from "ramda"

export default curryN(2, function appendM (value: any, list: Array<*>): Array<*> {
  list.push(value)

  return list
})
