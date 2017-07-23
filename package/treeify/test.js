/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"
import keyChain from "@unction/keychain"
import key from "@unction/key"
import {indexBy} from "ramda"
import {groupBy} from "ramda"

import treeify from "./"

const collection = [
  {
    id: "a1",
    type: "resources",
    attributes: {
      version: "v1",
      namespace: "accounts",
    },
  },
  {
    id: "a2",
    type: "resources",
    attributes: {
      version: "v1",
      namespace: "accounts",
    },
  },
  {
    id: "b1",
    type: "resources",
    attributes: {
      version: "v1",
      namespace: "profiles",
    },
  },
  {
    id: "b1",
    type: "resources",
    attributes: {
      version: "v2",
      namespace: "profiles",
    },
  },
]

test(({same, end}) => {
  same(
    treeify(
      [
        groupBy(key("type")),
      ]
    )(collection),
    {
      resources: [
        {
          id: "a1",
          type: "resources",
          attributes: {
            version: "v1",
            namespace: "accounts",
          },
        },
        {
          id: "a2",
          type: "resources",
          attributes: {
            version: "v1",
            namespace: "accounts",
          },
        },
        {
          id: "b1",
          type: "resources",
          attributes: {
            version: "v1",
            namespace: "profiles",
          },
        },
        {
          id: "b1",
          type: "resources",
          attributes: {
            version: "v2",
            namespace: "profiles",
          },
        },
      ],
    }
  )

  end()
})

test(({same, end}) => {
  same(
    treeify(
      [
        groupBy(key("type")),
        groupBy(keyChain(["attributes", "namespace"])),
      ]
    )(collection),
    {
      resources: {
        accounts: [
          {
            id: "a1",
            type: "resources",
            attributes: {
              version: "v1",
              namespace: "accounts",
            },
          },
          {
            id: "a2",
            type: "resources",
            attributes: {
              version: "v1",
              namespace: "accounts",
            },
          },
        ],
        profiles: [
          {
            id: "b1",
            type: "resources",
            attributes: {
              version: "v1",
              namespace: "profiles",
            },
          },
          {
            id: "b1",
            type: "resources",
            attributes: {
              version: "v2",
              namespace: "profiles",
            },
          },
        ],
      },
    }
  )

  end()
})

test(({same, end}) => {
  same(
    treeify(
      [
        groupBy(key("type")),
        groupBy(keyChain(["attributes", "namespace"])),
        groupBy(keyChain(["attributes", "version"])),
      ]
    )(collection),
    {
      resources: {
        accounts: {
          v1: [
            {
              id: "a1",
              type: "resources",
              attributes: {
                version: "v1",
                namespace: "accounts",
              },
            },
            {
              id: "a2",
              type: "resources",
              attributes: {
                version: "v1",
                namespace: "accounts",
              },
            },
          ],
        },
        profiles: {
          v1: [
            {
              id: "b1",
              type: "resources",
              attributes: {
                version: "v1",
                namespace: "profiles",
              },
            },
          ],
          v2: [
            {
              id: "b1",
              type: "resources",
              attributes: {
                version: "v2",
                namespace: "profiles",
              },
            },
          ],
        },
      },
    }
  )

  end()
})

test(({same, end}) => {
  same(
    treeify(
      [
        groupBy(key("type")),
        groupBy(keyChain(["attributes", "namespace"])),
        groupBy(keyChain(["attributes", "version"])),
        indexBy(key("id")),
      ]
    )(collection),
    {
      resources: {
        accounts: {
          v1: {
            a1: {
              id: "a1",
              type: "resources",
              attributes: {
                version: "v1",
                namespace: "accounts",
              },
            },
            a2: {
              id: "a2",
              type: "resources",
              attributes: {
                version: "v1",
                namespace: "accounts",
              },
            },
          },
        },
        profiles: {
          v1: {
            b1: {
              id: "b1",
              type: "resources",
              attributes: {
                version: "v1",
                namespace: "profiles",
              },
            },
          },
          v2: {
            b1: {
              id: "b1",
              type: "resources",
              attributes: {
                version: "v2",
                namespace: "profiles",
              },
            },
          },
        },
      },
    }
  )

  end()
})
