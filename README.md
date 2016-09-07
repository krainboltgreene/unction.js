# ramda-extra

A set of useful functions that ramda won't implement that uses ramda.

![Version][BADGE_VERSION]
![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]


## using

I need a good way of documenting this.


### mapKeys

> Function -> Pairs -> Pairs

Like ramda's map, but instead of the value it maps over keys.

``` javascript
import {kebab} from "case"
import {mapKeys} from "ramda-extra"

const attributes = {
  name: "Kurtis Rainbolt-Greene",
  createdAt: new Date()
}

mapKeys(kebab, attributes)
// {
//   name: "Kurtis Rainbolt-Greene",
//   "created-at": new Date()
// }
```

### hammer

> Anything -> Pairs -> Pairs

Use this to de-nest a nested object.

``` javascript
import {hammer} from "ramda-extra"

const attributes = {
  id: 1
  attributes: {
    name: "Kurtis Rainbolt-Greene"
  }
}
hammer("data", attributes)
// {
//   id: 1,
//   name: "Kurtis Rainbolt-Greene"
// }
```

[BADGE_TRAVIS]: https://img.shields.io/travis/krainboltgreene/ramda-extra.js.svg?maxAge=2592000&style=flat-square
[BADGE_VERSION]: https://img.shields.io/npm/v/ramda-extra.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/krainboltgreene/ramda-extra.js.svg?maxAge=2592000&style=flat-square
