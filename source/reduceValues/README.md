# @unction/reduceValues

![Version][BADGE_VERSION]
![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> (AccumulatedType -> ValueType -> AccumulatedType) -> InitialType -> IterableType -> AccumulatedType

A pretty standard `reduceValues()`, but where the `𝑓()` is unary curries.

``` javascript
reduceValues(
  (accumulation) => (current) => `${accumulation}/${current}`
)(
  "~"
)(
  ["Users", "krainboltgreene", "Code"]
)
```

Which will return:

``` javascript
"~/Users/krainboltgreene/Code"
```

[BADGE_TRAVIS]: https://img.shields.io/travis/krainboltgreene/unction.js.svg?maxAge=2592000&style=flat-square
[BADGE_VERSION]: https://img.shields.io/npm/v/@unction/reducevalues.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/krainboltgreene/unction.js.svg?maxAge=2592000&style=flat-square
