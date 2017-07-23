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

test(({same, end}) => {
  same(
    mapValues((value) => value + 1)({
      age: 29,
      interval: 10,
    }),
    {
      age: 30,
      interval: 11,
    }
  )

  end()
})
