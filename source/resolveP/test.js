/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import resolveP from "../resolveP"

test(({equal}) => {
  return resolveP("a")
    .then((value) => equal(value, "a"))
})
