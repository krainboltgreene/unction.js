// > ? Function -> Object:a -> Object:b
//
// Like ramda's map, but instead of the value it maps over keys.
//
// ``` javascript
// import {kebab} from "case"
// import {mapKeys} from "ramda-extra"
//
// const attributes = {
//   name: "Kurtis Rainbolt-Greene",
//   createdAt: new Date()
// }
//
// mapKeys(kebab, attributes)
// // {
// //   name: "Kurtis Rainbolt-Greene",
// //   "created-at": new Date()
// // }
// ```

import {curryN} from "ramda"
import {fromPairs} from "ramda"
import {map} from "ramda"
import {adjust} from "ramda"
import {toPairs} from "ramda"
import {type} from "ramda"

const ARGUMENTS = 2

export default curryN(ARGUMENTS, function mapKeys (ƒunction, pairs) {
  if (type(ƒunction) !== "Function") {
    throw new Error(`mapKeys only works with an Function, but the first argument was a ${type(ƒunction)}`)
  }

  if (type(pairs) !== "Object") {
    throw new Error(`mapKeys only works on an Object, but the second argument was a ${type(pairs)}`)
  }

  return fromPairs(
    map(
      adjust(ƒunction, 0),
      toPairs(pairs)
    )
  )
})
