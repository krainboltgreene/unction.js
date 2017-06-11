/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import mapKeysWithValueKey from "./"

test(({same, end}) => {
  same(
    mapKeysWithValueKey((value) => (index) => `${value}:${index}`)(["a", "b", "c"]),
    ["a:0", "b:1", "c:2"]
  )
  end()
})
