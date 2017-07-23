/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {same} from "tap"
import {replace} from "ramda"

import mapKeys from "./"

same(
  mapKeys(
    replace(/new/)("")
  )({
    newLabel: "1",
    newValue: "2",
  }),
  {
    Label: "1",
    Value: "2",
  }
)
