/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import mergeAllRight from "./"

test(({same, end}) => {
  same(
    mergeAllRight([["0"], ["1"], ["2"]]),
    ["0", "1", "2"]
  )

  end()
})

test(({same, end}) => {
  same(
    mergeAllRight([{aaa: "aaa"}, {bbb: "bbb"}, {ccc: "ccc"}]),
    {
      aaa: "aaa",
      bbb: "bbb",
      ccc: "ccc",
    }
  )

  end()
})
