# @unction/forEach


![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> (any -> KeyType -> any) -> IterableType -> IterableType

Takes any kind of iterable object and figures out the best way to iterate over it.

``` javascript
forEach((x) => y)([])
forEach((x) => y)(new Map)
forEach((x) => y)({})
```

[BADGE_TRAVIS]: https://img.shields.io/travis/krainboltgreene/unction.js.svg?maxAge=2592000&style=flat-square

[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/krainboltgreene/unction.js.svg?maxAge=2592000&style=flat-square
