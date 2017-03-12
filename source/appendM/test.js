/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import appendM from "./"

test(({same, end}) => {
  same(appendM("a", []), ["a"])

  end()
})
