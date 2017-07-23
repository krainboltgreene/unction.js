# @unction/applicators

![Version][BADGE_VERSION]
![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> Iterable<ValueType -> ValueType> -> Iterable<ValueType> -> Array<ValueType>

Takes a list of functions and a list of values and applies the values to the functions.

``` javascript
applicators([
  recordfrom(["point", "x"]),
  recordfrom(["point", "y"]),
  recordfrom(["point", "z"]),
])([
  40.453,
  2.2,
  423.0,
])
```

returns

``` javascript
[
  {point: {x: 40.453}},
  {point: {y: 2.2}},
  {point: {z: 423.0}},
]
```

``` javascript
applicators({
  x: inc,
  y: dec
})({
  x: -1,
  y: 1
})
```

returns

``` javascript
{
  x: 0,
  y: 0
}
```

[BADGE_TRAVIS]: https://img.shields.io/travis/krainboltgreene/unction.js.svg?maxAge=2592000&style=flat-square
[BADGE_VERSION]: https://img.shields.io/npm/v/@unction/applicators.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/krainboltgreene/unction.js.svg?maxAge=2592000&style=flat-square
