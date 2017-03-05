// > ? (Object of Anything|Array of Anything):ab -> (Object of Anything|Array of Anything):b
//
// Takes a collection (Array or Object) and returns a copy of that value without `null` or `undefined` values.
//
//
// ``` javascript
// import {prop} from "ramda"
// import {head} from "ramda"
// import {compact} from "ramda-extra"
// import {users} from "./users"
//
// const avatarUrls = map(prop("avatar"), users())
// console.log(avatarUrls) // => [null, "/1.jpg", null, "/3.jpg"]
// console.log(compact(avatarUrls))
//
// const attributes = head(users)
// console.log(attributes) // {"avatar": null, "name": "Kurtis Rainbolt-Greene"}
// console.log(compact(attributes)) // {"name": "Kurtis Rainbolt-Greene"}
// ```

import {reject} from "ramda"
import {isNil} from "ramda"

export default function compact (collection: Array<*>): Array<*> {
  return reject(isNil, collection)
}
