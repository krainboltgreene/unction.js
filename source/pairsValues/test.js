/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import {pairsValues} from "../index"

test(({same, end}) => {
  same(
    pairsValues([
      ["a", "b"],
      ["c", "d"],
    ]),
    ["b", "d"]
  )
  end()
})
