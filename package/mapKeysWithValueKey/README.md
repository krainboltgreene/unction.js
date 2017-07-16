# @unction/mapKeysWithValueKey

![Version][BADGE_VERSION]
![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> (ValueType => KeyType => KeyType) -> IterableType -> IterableType

Map over keys with the context of the value and key.

``` javascript
const attributes = {
  name: "Kurtis Rainbolt-Greene",
  createdAt: new Date()
}

mapKeys((value) => (key) => )(attributes)
```

Would return:

``` javascript
{
  name: "Kurtis Rainbolt-Greene",
  "created-at": new Date()
}
```

[BADGE_TRAVIS]: https://img.shields.io/travis/krainboltgreene/unction.js.svg?maxAge=2592000&style=flat-square
[BADGE_VERSION]: https://img.shields.io/npm/v/mapkeyswithvaluekey.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/krainboltgreene/unction.js.svg?maxAge=2592000&style=flat-square
