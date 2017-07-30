# @unction/cascadingKeyChain


![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> Array<UnfinishedKeyChainType> -> IterableType -> ValueType

Cascades through multiple keychains in order to arrive at a value. Null keys are replaced with the previous keychain's value.

``` javascript
cascadingKeyChain(
  [
    ["ephemeral", "current", "session"],
    ["resources", "sessions", null, "relationships", "account", "data", "id"],
    ["resources", "accounts", null, "attributes", "name"]
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
)
```

returns

``` javascript
"Kurtis Rainbolt-Greene"
```

[BADGE_TRAVIS]: https://img.shields.io/travis/krainboltgreene/unction.js.svg?maxAge=2592000&style=flat-square

[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/krainboltgreene/unction.js.svg?maxAge=2592000&style=flat-square
