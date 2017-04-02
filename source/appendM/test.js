/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import {appendM} from "../index"

test(({same, end}) => {
  same(appendM("a", []), ["a"])

  end()
})
