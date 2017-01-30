// > ? Function -> (String | Array of Strings) -> Object:a -> Object:ab
//
// Given an object this function will return that object but with a new property, where the value is computed. The computation is given the object you'll be copying.
//
// ``` javascript
// import {computedProp} from "ramda-extra"
//
// const payload = {
//   id: "1",
//   attributes: {
//     username: "krainboltgreene"
//   }
// }
// const key = "tag"
// const computer = ({id, attributes: {username}}) => `${username}#${id}`
//
// computedProp(computer, key, payload)
// // {
// //   id: "1",
// //   tag: "krainboltgreene#1",
// //   attributes: {
// //     username: "krainboltgreene"
// //   }
// // }
//
// const multiKey = ["attributes", "tag"]
//
// computedProp(computer, key, payload)
// // {
// //   id: "1",
// //   attributes: {
// //     tag: "krainboltgreene#1",
// //     username: "krainboltgreene"
// //   }
// // }
// ```

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
