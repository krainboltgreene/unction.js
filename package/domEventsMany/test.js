/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import domEventsMany from "./"

test(({same, end}) => {
  same(
    domEventsMany(),
    null
  )

  end()
})
