# @unction/partition

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> PredicateType -> IterableType -> [IterableType, IterableType]

This function takes an IterableType and returns an array of two IterableTypes,
the first of which contains elements which satisfy the predicate,
the second of which contains element which do not.

``` javascript
partition(isOdd)([1,2,3,4]) // [[1,3],[2,4]]
```

[BADGE_TRAVIS]: https://img.shields.io/travis/krainboltgreene/unction.js.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/krainboltgreene/unction.js.svg?maxAge=2592000&style=flat-square
