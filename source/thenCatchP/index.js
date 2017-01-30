// > ? Function -> Promise(Anything):a ->  Promise(Anything):b -> Promise(Function):c
//
// A port of the `Promise.prototype.then()` function, but with the extra catch argument.
// Credit: @keithamus

import {invoker} from "ramda"

export default invoker(2, "then")
