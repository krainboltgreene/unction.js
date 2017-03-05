import {same} from "tap"

import nestedObjOf from "./"

same(
  nestedObjOf(["key", "subkey"], "value"),
  {key: {subkey: "value"}}
)
