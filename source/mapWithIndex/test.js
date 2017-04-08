/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import mapWithIndex from "./"

test(({same, end}) => {
  same(
    mapWithIndex((value, index) => `${value}:${index}`)(["a", "b", "c"]),
    ["a:0", "b:1", "c:2"]
  )
  end()
})
