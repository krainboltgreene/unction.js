// > ? Array of Strings -> Anything -> Object
//
// Given a path and a value, it creates an object that has keys based on the path.
//
// ``` javascript
// import {nestedObjOf} from "ramda-extra"
//
// const path = ["key", "subkey"]
// const value = "value"
//
// nestedObjOf(path, value)
// // {
// //   key: {
// //     subkey: "value"
// //   }
// // }
// ```

import {curryN} from "ramda"
import {reduce} from "ramda"
import {flip} from "ramda"
import {reverse} from "ramda"
import {objOf} from "ramda"

const ARGUMENTS = 2

export default curryN(ARGUMENTS, function nestedObjOf (path, value) {
  return reduce(flip(objOf), value, reverse(path))
})
