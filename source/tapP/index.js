// > ? Function -> Promise(Anything):a -> Promise(Anything):a
//
// Tap your function around a promise, and still return that promise. Note that this function is largely to serve as a solution to tap + promises. Consider this example:
//
// ``` javascript
// import {tap} from "ramda"
// import startLoading from "../startLoading"
// import finishLoading from "../finishLoading"
// import createAccount from "../createAccount"
// import createSession from "../createSession"
//
// export default function signUp (attributes) {
//   return function future (dispatch, {sdk}) {
//     return sdk
//       .then(tap(startLoading))
//       .then(tap(createAccount(attributes))
//       .then(tap(createSession(attributes))
//       .then(tap(finishLoading))
//   }
// }
// ```
//
// Due to the way promises and tap work you would see these events:
//
// ```
// startLoading
// finishLoading
// createAccount
// createSession
// ```
//
// But with `tapP()` you would get them in order:
//
// ``` javascript
// import {tapP} from "ramda"
// import startLoading from "../startLoading"
// import finishLoading from "../finishLoading"
// import createAccount from "../createAccount"
// import createSession from "../createSession"
//
// export default function signUp (attributes) {
//   return function future (dispatch, {sdk}) {
//     return sdk
//       .then(tapP(startLoading))
//       .then(tapP(createAccount(attributes))
//       .then(tapP(createSession(attributes))
//       .then(tapP(finishLoading))
//   }
// }
// ```
//
// ```
// startLoading
// createAccount
// createSession
// finishLoading
// ```

import {always} from "ramda"
import resolveP from "../resolveP"
import thenP from "../thenP"

export default function tapP (ƒunction) {
  return function tapPWithFunction (value) {
    return thenP(always(value), resolveP(ƒunction(value)))
  }
}
