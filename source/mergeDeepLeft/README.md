# ramda-mergeDeepLeft

![Version][BADGE_VERSION]
![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> IterableType -> IterableType -> IterableType

Recursively merges two objects/arrays. Merges objects with `merge` and arras with concat. Prefers left. THAT IS ALL.

``` javascript
import mergeDeepLeft from "ramda-mergeDeepLeft"

const left = {
  alpha: "1"
}
const right = {
  beta: "2"
}

mergeDeepLeft(left)(right)
{
  alpha: "1",
  beta: "2"
}
```

``` javascript
const left = {
  alpha: {
    alpha1: "1"
  }
}
const right = {
  beta: {
    beta1: "1"
  }
}

mergeDeepLeft(left)(right)
{
  alpha: {
    alpha1: "1"
  },
  beta: {
    beta1: "1"
  }
}
```

``` javascript
const left = {
  alpha: [
    "1"
  ]
}
const right = {
  alpha: [
    "1"
  ]
}

mergeDeepLeft(left)(right)
{
  alpha: [
    "1",
    "1"
  ]
}
```

[BADGE_TRAVIS]: https://img.shields.io/travis/krainboltgreene/ramda-extra.js.svg?maxAge=2592000&style=flat-square
[BADGE_VERSION]: https://img.shields.io/npm/v/ramda-extra.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/krainboltgreene/ramda-extra.js.svg?maxAge=2592000&style=flat-square
