/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import {nestedObjOf} from "../index"

test(({same, end}) => {
  same(
    nestedObjOf(["key", "subkey"], "value"),
    {key: {subkey: "value"}}
  )

  end()
})
