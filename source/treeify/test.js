/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"
import {path} from "ramda"
import {prop} from "ramda"
import {indexBy} from "ramda"
import {groupBy} from "ramda"

import {treeify} from "../index"

const collection = [
  {
    id: "a1",
    type: "resources",
    attributes: {
      version: "v1",
      namespace: "accounts",
    }
  },
  {
    id: "a2",
    type: "resources",
    attributes: {
      version: "v1",
      namespace: "accounts",
    }
  },
  {
    id: "b1",
    type: "resources",
    attributes: {
      version: "v1",
      namespace: "profiles",
    }
  },
  {
    id: "b1",
    type: "resources",
    attributes: {
      version: "v2",
      namespace: "profiles",
    }
  }
]

test(({similar, end}) => {
  const functions = [
    groupBy(prop("type")),
    groupBy(path(["attributes", "namespace"])),
    groupBy(path(["attributes", "version"])),
    indexBy(prop("id")),
  ]
  const expected = {
    resources: {
      accounts: {
        v1: {
          a1: {
            id: "a1",
            type: "resources",
            attributes: {
              version: "v1",
              namespace: "accounts",
            }
          },
          a2: {
            id: "a2",
            type: "resources",
            attributes: {
              version: "v1",
              namespace: "accounts",
            }
          }
        }
      },
      profiles: {
        v1: {
          b1: {
            id: "b1",
            type: "resources",
            attributes: {
              version: "v1",
              namespace: "profiles",
            }
          }
        },
        v2: {
          b1: {
            id: "b1",
            type: "resources",
            attributes: {
              version: "v2",
              namespace: "profiles",
            }
          }
        }
      }
    }
  }

  similar(treeify(functions)(collection), expected)

  end()
})
