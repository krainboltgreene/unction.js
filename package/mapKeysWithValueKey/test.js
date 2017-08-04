/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {same} from "tap"
import {replace} from "ramda"

import mapKeysWithValueKey from "./"

same(
  mapKeysWithValueKey(
    (value) => (key) => replace(/new/)("")(key + value)
  )({
    newLabel: "1",
    newValue: "2",
  }),
  {
    Label1: "1",
    Value2: "2",
  }
)
