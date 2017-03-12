/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {same} from "tap"

import mapKeys from "./"

same(
  mapKeys(
    (key: string): string => key.replace(/a/, ""),
    {
      aa: "1",
      ab: "2"
    }
  ),
  {
    a: "1",
    b: "2"
  }
)
