/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import startsWith from "./"

test(({ok, end}) => {
  ok(startsWith("I have")("I have no period"))
  end()
})

test(({notOk, end}) => {
  notOk(startsWith("period.")("I have no period."))
  end()
})
