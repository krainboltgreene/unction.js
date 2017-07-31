/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import fresh from "./"

test(({same, end}) => {
  same(
    fresh(),
    null
  )

  end()
})
