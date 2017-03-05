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
import mergeDeep from "../mergeDeep"
import nestedObjOf from "../nestedObjOf"

export default curryN(3, function computedProp (computer: Function, propOrPath: string | number | Array<string | number>, structure: Object): Object {
  return mergeDeep(structure, nestedObjOf(propOrPath, computer(structure)))
})
