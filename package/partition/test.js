/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import partition from "./"

const isOdd = (value) => value%2 != 0

test(({same, end}) => {
  same(
    partition(isOdd)([1,2,3,4]),
    [[1,3],[2,4]]
  )

  end()
})
