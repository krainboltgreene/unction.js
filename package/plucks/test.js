/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-magic-numbers */
import {test} from "tap"

import plucks from "./"

test(({same, end}) => {
  same(
    plucks(
      [
        ["attributes", "name"],
        ["attributes", "age"],
        ["attributes", "friends"],
        ["id"]
      ]
    )(
      [
        {
          id: "1",
          attributes: {
            name: "Kurtis",
            age: 29,
            height: "5'10\"",
          },
        },
        {
          id: "2",
          attributes: {
            name: "Chris",
            age: 29,
            height: "5'8\"",
          },
        },
      ]
    ),
    [
      ["Kurtis", 29, null, "1"],
      ["Chris", 29, null, "2"]
    ]
  )

  end()
})
