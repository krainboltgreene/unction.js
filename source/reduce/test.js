/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import reduce from "./"

test(({equal, end}) => {
  equal(
    reduce((accumulation) => (current) => `${accumulation}/${current}`)(".")(["a", "b", "c"]),
    "./a/b/c"
  )

  end()
})
