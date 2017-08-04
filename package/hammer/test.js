/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import hammer from "./"

test(({same, end}) => {
  same(
    hammer("attributes")({
      id: "1",
      attributes: {name: "Kurtis Rainbolt-Greene"},
    }),
    {
      id: "1",
      name: "Kurtis Rainbolt-Greene",
    }
  )

  end()
})
