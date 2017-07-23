/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import cascadingKeyChain from "./"

test(({same, end}) => {
  same(
    cascadingKeyChain(
      [
        ["ephemeral", "current", "session"],
        ["resources", "sessions", null, "relationships", "account", "data", "id"],
        ["resources", "accounts", null, "attributes", "name"],
      ]
    )(
      {
        ephemeral: {current: {session: "1"}},
        resources: {
          sessions: {
            1: {
              id: "1",
              relationships: {account: {data: {id: "2"}}},
            },
          },
          accounts: {
            2: {
              id: "2",
              attributes: {name: "Kurtis Rainbolt-Greene"},
            },
          },
        },
      }
    ),
    "Kurtis Rainbolt-Greene"
  )

  end()
})
