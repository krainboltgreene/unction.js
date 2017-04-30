/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-magic-numbers */
import {test} from "tap"
import {indexBy} from "ramda"
import {groupBy} from "ramda"
import {path} from "ramda"
import {prop} from "ramda"
import mapValues from "@unction/mapvalues"

import nestedApply from "./"

test(({similar, end}) => {
  similar(
    nestedApply(mapValues)((value) => `${value}`)(0)([1]),
    ["1"]
  )

  end()
})


test(({similar, end}) => {
  similar(
    nestedApply(mapValues)((value) => `${value}`)(1)([[1]]),
    [["1"]]
  )

  end()
})

test(({similar, end}) => {
  similar(
    nestedApply(mapValues)((value) => `${value}`)(2)([[[1]]]),
    [[["1"]]]
  )

  end()
})

test(({similar, end}) => {
  similar(
    nestedApply(mapValues)(indexBy(prop("id")))(0)(
      [
        [
          {
            id: "a1",
            type: "commercial",
          },
          {
            id: "a2",
            type: "commercial",
          }
        ],
        [
          {
            id: "b1",
            type: "residential",
          },
          {
            id: "b2",
            type: "residential",
          }
        ]
      ]
    ),
    [
      {
        a1: {
          id: "a1",
          type: "commercial",
        },
        a2: {
          id: "a2",
          type: "commercial",
        },
      },
      {
        b1: {
          id: "b1",
          type: "residential",
        },
        b2: {
          id: "b2",
          type: "residential",
        },
      },
    ]
  )

  end()
})
test(({similar, end}) => {
  similar(
    nestedApply(mapValues)(groupBy(path(["attributes", "version"])))(1)(
      {
        resources: {
          accounts: [{
            id: "a1",
            type: "resources",
            attributes: {
              version: "v1",
              namespace: "accounts"
            }
          }, {
            id: "a2",
            type: "resources",
            attributes: {
              version: "v1",
              namespace: "accounts"
            }
          }],
          profiles: [{
            id: "b1",
            type: "resources",
            attributes: {
              version: "v1",
              namespace: "profiles"
            }
          }, {
            id: "b1",
            type: "resources",
            attributes: {
              version: "v2",
              namespace: "profiles"
            }
          }]
        }
      }
    ),
    {
      resources: {
        accounts: {
          v1: [
            {
              id: "a1",
              type: "resources",
              attributes: {
                version: "v1",
                namespace: "accounts"
              }
            },
            {
              id: "a2",
              type: "resources",
              attributes: {
                version: "v1",
                namespace: "accounts"
              }
            }
          ]
        },
        profiles: {
          v1: [
            {
              id: "b1",
              type: "resources",
              attributes: {
                version: "v1",
                namespace: "profiles"
              }
            }
          ],
          v2: [
            {
              id: "b1",
              type: "resources",
              attributes: {
                version: "v2",
                namespace: "profiles"
              }
            }
          ],
        }
      }
    }
  )

  end()
})
