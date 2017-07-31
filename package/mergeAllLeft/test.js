/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import mergeAllLeft from "./"

test(({same, end}) => {
  same(
    mergeAllLeft([["0"], ["1"], ["2"]]),
    ["0", "1", "2"]
  )

  end()
})

test(({same, end}) => {
  same(
    mergeAllLeft([{aaa: "aaa"}, {bbb: "bbb"}, {ccc: "ccc"}]),
    {
      aaa: "aaa",
      bbb: "bbb",
      ccc: "ccc",
    }
  )

  end()
})
