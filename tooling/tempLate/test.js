/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import tempLate from "./"

test(({same, end}) => {
  same(
    tempLate(),
    null
  )

  end()
})
