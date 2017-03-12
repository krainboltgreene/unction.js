/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import optimisticP from "../optimisticP"

test(({includes}) => {
  return optimisticP(
    [
      Promise.resolve("a")
    ]
  )
    .then((values) => includes(values, ["a"]))
})

test(({includes}) => {
  return optimisticP(
    [
      Promise.resolve("a"),
      Promise.reject(new Error("b"))
    ]
  )
    .then((values) => includes(values, ["a"]))
})

test(({includes}) => {
  return optimisticP(
    [
      Promise.resolve("a"),
      Promise.resolve("c")
    ]
  )
    .then((values) => includes(values, ["a", "c"]))
})

test(({includes}) => {
  return optimisticP(
    [
      Promise.resolve("a"),
      Promise.reject(new Error("b")),
      Promise.resolve("c")
    ]
  )
    .then((values) => includes(values, ["a", "c"]))
})
