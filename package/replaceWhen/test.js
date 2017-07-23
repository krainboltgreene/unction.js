/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-magic-numbers */
import {test} from "tap"

import replaceWhen from "./"

const isEven = (value) => value % 2 === 0

test(({same, end}) => {
  same(
    replaceWhen(isEven)(null)([1, 2, 3]),
    [1, null, 3]
  )

  end()
})
