# @unction/sampleSize

![Version][BADGE_VERSION]
![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> number -> (string | Array<any>) -> (string | any)

Takes an Array or string and randomly picks *n* elements to return, but never the same one.

``` javascript
users() // => [{"id": 1, "name": "Kurtis Rainbolt-Greene"}, {"id": 2, "name": "Angela Englund"}]

sample(1)(users()) // => [{"id": 2, "name": "Angela Englund"}]

sample(2)(users()) // => [{"id": 2, "name": "Angela Englund"}, {"id": 1, "name": "Kurtis Rainbolt-Greene"}]
```

[BADGE_TRAVIS]: https://img.shields.io/travis/krainboltgreene/unction.js.svg?maxAge=2592000&style=flat-square
[BADGE_VERSION]: https://img.shields.io/npm/v/@unction/samplesize.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/krainboltgreene/unction.js.svg?maxAge=2592000&style=flat-square
