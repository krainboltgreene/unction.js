# @unction/key


![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> KeyType -> any -> ValueType

Returns the value of a specific key on an iterable. If no key is found it returns undefined. If the second argument isn't an iterable we return undefined, to allow for graceful failure.

``` javascript
key("aaa")({aaa: "1"}) // "1"
key("bbb")({aaa: "1"}) // undefined
key("bbb")(undefined) // undefined
key(0)(["aaa"]) // "aaa"
```

[BADGE_TRAVIS]: https://img.shields.io/travis/krainboltgreene/unction.js.svg?maxAge=2592000&style=flat-square

[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/krainboltgreene/unction.js.svg?maxAge=2592000&style=flat-square
