/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-magic-numbers */
import {test} from "tap"

import upTo from "./"

test(({same, end}) => {
  same(upTo(5), [1, 2, 3, 4, 5])
  end()
})
