/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import thenP from "../thenP"

test(({equal}) => {
  return thenP(
    (value) => equal(value, "a"),
    Promise.resolve("a")
  )
})
