/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import mapValuesWithValueKey from "./"

test(({same, end}) => {
  same(
    mapValuesWithValueKey((value) => (index) => `${value}:${index}`)(["a", "b", "c"]),
    ["a:0", "b:1", "c:2"]
  )
  end()
})
