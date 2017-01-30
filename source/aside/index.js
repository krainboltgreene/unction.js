// > ? ...Function -> Anything:a -> Anything:a
//
// Use this function to do thing aside of a main pipeline.
//
// ``` javascript
// import {pipe} from "ramda"
// import {aside} from "ramda-extra"
// import format from "../format"
// import log from "../log"
// import processData from "../processData"
//
// export default function generateGraph () {
//   return pipe(
//     aside(format, log),
//     processData
//   )
// }
// ```

import {tap} from "ramda"
import {pipe} from "ramda"

export default function aside (...ƒunctions) {
  return tap(pipe(...ƒunctions))
}
