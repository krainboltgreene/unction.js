/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import thenCatchP from "./"

test(({equal, notEqual}) => {
  return thenCatchP((value) => equal(value, "a"))((value) => notEqual(value, "a"))(Promise.resolve("a"))
})
test(({same, notSame}) => {
  return thenCatchP((value) => notSame(value, new Error("a")))((value) => same(value, new Error("a")))(Promise.reject(new Error("a")))
})
