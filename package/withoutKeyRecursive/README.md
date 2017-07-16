# @unction/withoutKeyRecursive

![Version][BADGE_VERSION]
![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> KeyType -> IterableType -> IterableType

Returns a copy of an iterable without a path.

``` javascript
withoutKeyRecursive("__abstraction__")(
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
)
```

Which will return:

``` javascript
{
  id: "1",
  name: "Kurtis Rainbolt-Greene",
  attributes: {
    version: "v1",
    namespace: "accounts",
  },
}
```

[BADGE_TRAVIS]: https://img.shields.io/travis/krainboltgreene/unction.js.svg?maxAge=2592000&style=flat-square
[BADGE_VERSION]: https://img.shields.io/npm/v/@unction/withoutkeyrecursive.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/krainboltgreene/unction.js.svg?maxAge=2592000&style=flat-square
