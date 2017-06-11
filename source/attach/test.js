/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import attach from "./"

test(({same, end}) => {
  same(
    attach("hello")("world")({}),
    {hello: "world"}
  )

  end()
})
