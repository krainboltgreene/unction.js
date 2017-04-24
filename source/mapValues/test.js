/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-magic-numbers */
import {test} from "tap"

import mapValues from "./"

test(({same, end}) => {
  same(
    mapValues((value) => value + 1)([1, 2, 3]),
    [2, 3, 4]
  )

  end()
})
