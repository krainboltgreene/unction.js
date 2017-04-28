/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import reduceValues from "./"

test(({equal, end}) => {
  equal(
    reduceValues((accumulation) => (current) => `${accumulation}/${current}`)(".")(["a", "b", "c"]),
    "./a/b/c"
  )

  end()
})
