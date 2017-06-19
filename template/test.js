/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import template from "./"

test(({same, end}) => {
  same(
    template(),
    null
  )

  end()
})
