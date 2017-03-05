// > ? (Object of Anything | Array of Anything):a -> (Object of Anything | Array of Anything):b
//
// Recursively merges two objects/arrays. THAT IS ALL.
//
// ``` javascript
// import {mergeDeep} from "ramda-extra"
//
// const left = {
//   alpha: "1"
// }
// const right = {
//   beta: "2"
// }
//
// mergeDeep(left, right)
// // {
// //   alpha: "1",
// //   beta: "2"
// // }
// ```
//
// ``` javascript
// import {mergeDeep} from "ramda-extra"
//
// const left = {
//   alpha: {
//     alpha1: "1"
//   }
// }
// const right = {
//   beta: {
//     beta1: "1"
//   }
// }
//
// mergeDeep(left, right)
// // {
// //   alpha: {
// //     alpha1: "1"
// //   },
// //   beta: {
// //     beta1: "1"
// //   }
// // }
// ```
//
// ``` javascript
// import {mergeDeep} from "ramda-extra"
//
// const left = {
//   alpha: [
//     "1"
//   ]
// }
// const right = {
//   alpha: [
//     "1"
//   ]
// }
//
// mergeDeep(left, right)
// // {
// //   alpha: [
// //     "1",
// //     "1"
// //   ]
// // }
// ```

import {mergeWith} from "ramda"
import {type} from "ramda"
import {concat} from "ramda"
import {curryN} from "ramda"

const ARGUMENTS = 2

export default curryN(ARGUMENTS, function mergeDeep (left: Object, right: Object): Object {
  if (type(left) !== type(right)) {
    return right
  }

  if (type(right) === "Object") {
    return mergeWith(mergeDeep, left, right)
  }

  if (type(right) === "Array") {
    return concat(left, right)
  }

  return right
})
