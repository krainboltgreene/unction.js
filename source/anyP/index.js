// > ? Array of Promise(Anything):a -> Promise(Array of Promise(Anything):a)
//
// Will resolve to the first Promise that resolves (and the value will be that Promises value). If it rejects, it will reject with all N rejection values in an array.
// Credit: @keithamus

import {pipe} from "ramda"
import {map} from "ramda"
import flipP from "../flipP"
import allP from "../allP"

export default pipe(map(flipP), allP, flipP)
