/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import arrayify from "./"

test(({same, end}) => {
  same(
    arrayify("a"),
    ["a"]
  )

  end()
})

test(({same, end}) => {
  same(
    arrayify(["a"]),
    ["a"]
  )

  end()
})
