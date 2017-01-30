// ? Anything:a -> Array:b -> Array:ab
import {curryN} from "ramda"

export default curryN(2, function appendM (value, list) {
  console.log({value: value, list})
  list.push(value)

  return list
})
