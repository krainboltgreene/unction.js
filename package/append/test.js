/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import append from "./"

test(({same, end}) => {
  same(append("a")(["b"]), ["b", "a"])

  end()
})
