// > ? ...Function -> Promise(Anything:a) -> Promise(Anything:a)
//
// Use this function to do things aside of a main pipeline, while also allowing for promise resolution.
//
// This differs from `aside()` in that an incoming value can be a promise and all functions given will resolve before passing on.
//
// ``` javascript
// import {asideP} from "ramda-extra"
// import startLoading from "./startLoading"
// import finishLoading from "./finishLoading"
//
// export default function listAccounts () {
//   return function future (dispatch, {sdk}) {
//     return sdk
//       .then(asideP(startLoading, dispatch))
//       .then((client) => client("v1/accounts").list())
//       .then(asideP(finishLoading, dispatch))
//   }
// }
// ```

import {pipe} from "ramda"
import tapP from "../tapP"

export default function asideP (...ƒunctions) {
  return tapP(pipe(...ƒunctions))
}
