/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import {tapP} from "../index"

test(({equal}) => {
  return Promise
    .resolve("a")
    .then(tapP((value) => equal(value, "a")))
})

test(({equal}) => {
  return Promise
    .resolve("a")
    .then(tapP(() => "b"))
    .then((value) => equal(value, "a"))
})
