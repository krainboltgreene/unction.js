// > ? Function -> Promise(Anything):a -> Promise(Function):b
//
// A port of the `Promise.prototype.catch()` function.
// Credit: @keithamus

import {invoker} from "ramda"

export default invoker(1, "catch")
