import {test} from "tap"

import resolveP from "../resolveP"

test(({equal}) => {
  return resolveP("a")
    .then((value) => equal(value, "a"))
})
