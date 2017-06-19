/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-magic-numbers, id-length */
import {test} from "tap"

import zip from "./"

test(({same, end}) => {
  same(
    zip([1, 2, 3])([4, 5, 6]),
    [[1, 4], [2, 5], [3, 6]]
  )

  end()
})

test(({same, end}) => {
  same(
    zip({
      x: 1,
      y: 2,
      z: 0,
    })({
      x: 0,
      y: 0,
      z: 0,
    }),
    {
      x: [1, 0],
      y: [2, 0],
      z: [0, 0],
    }
  )

  end()
})
