/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import {catchP} from "../index"

test(({same}) => {
  return catchP(
    (value) => same(value, new Error("a")),
    Promise.reject(new Error("a"))
  )
})
