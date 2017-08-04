/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import prepend from "./"

test(({same, end}) => {
  same(prepend("a")(["b"]), ["a", "b"])

  end()
})
