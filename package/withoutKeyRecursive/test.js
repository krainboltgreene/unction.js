/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import withoutKeyRecursive from "./"

test(({same, end}) => {
  same(
    withoutKeyRecursive(
      "__abstraction__"
    )(
      {
        id: "1",
        name: "Kurtis Rainbolt-Greene",
        attributes: {
          version: "v1",
          namespace: "accounts",
          __abstraction__: {errors: []},
        },
        __abstraction__: {errors: []},
      }
    ),
    {
      id: "1",
      name: "Kurtis Rainbolt-Greene",
      attributes: {
        version: "v1",
        namespace: "accounts",
      },
    }
  )

  end()
})
