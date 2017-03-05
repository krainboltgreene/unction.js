import {test} from "tap"

import rejectP from "../rejectP"

test(({equal}) => {
  return rejectP("a")
    .catch((value) => equal(value, "a"))
})
