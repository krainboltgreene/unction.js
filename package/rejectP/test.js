/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import rejectP from "./"

test(({equal}) => {
  return rejectP("a")
    .catch((value) => equal(value, "a"))
})
