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
import {isArrayLike} from "ramda"

export default curryN(2, function nestedObjOf (propOrPath: string | number | Array<string | number>, value: Object): Object {
  if (isArrayLike(propOrPath)) {
    return reduce(flip(objOf), value, reverse(propOrPath))
  }

  return objOf(propOrPath, value)
})
