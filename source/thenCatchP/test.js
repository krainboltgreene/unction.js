import {test} from "tap"

import thenCatchP from "../thenCatchP"

test(({equal, notEqual}) => {
  return thenCatchP(
    (value) => equal(value, "a"),
    (value) => notEqual(value, "a"),
    Promise.resolve("a")
  )
})

test(({equal, notEqual}) => {
  return thenCatchP(
    (value) => notEqual(value, "a"),
    (value) => equal(value, "a"),
    Promise.reject("a")
  )
})
