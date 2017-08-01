# @unction/isPopulated


![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> mixed -> boolean

Allows you to check if a iterable has any items.

``` javascript
isPopulated([1]) // true
isPopulated({a: 'b'}) // true
isPopulated({}) // false
isPopulated([]) // false
isPopulated("") // false
isPopulated("a") // true
```

[BADGE_TRAVIS]: https://img.shields.io/travis/krainboltgreene/unction.js.svg?maxAge=2592000&style=flat-square

[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/krainboltgreene/unction.js.svg?maxAge=2592000&style=flat-square
