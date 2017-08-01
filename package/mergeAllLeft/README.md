# @unction/mergeAllLeft

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> Array<IterableType> -> IterableType

Merges a list of iterables (of the same type) into a single iterable.

``` javascript
mergeAllLeft([["0"], ["1"], ["2"]]) // ["2", "1", "0"]
mergeAllLeft([{aaa: "aaa"}, {bbb: "bbb"}, {ccc: "ccc"}]) // {aaa: "aaa", bbb: "bbb", ccc: "ccc",}
```

[BADGE_TRAVIS]: https://img.shields.io/travis/krainboltgreene/unction.js.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/krainboltgreene/unction.js.svg?maxAge=2592000&style=flat-square
