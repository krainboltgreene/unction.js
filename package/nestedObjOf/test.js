/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import nestedObjOf from "./"

test(({same, end}) => {
  same(
    nestedObjOf(["key", "subkey"])("value"),
    {key: {subkey: "value"}}
  )

  end()
})