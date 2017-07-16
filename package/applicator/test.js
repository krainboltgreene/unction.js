/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-magic-numbers */
import {test} from "tap"

import applicator from "./"

test(({same, end}) => {
  same(
    applicator((value) => value + 1)(1),
    2
  )

  end()
})
