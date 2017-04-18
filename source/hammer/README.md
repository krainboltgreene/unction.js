# ramda-hammer

![Version][BADGE_VERSION]
![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> KeyType -> IterableType -> IterableType

Use this to de-nest a nested object.

``` javascript
import hammer from "ramda-hammer"

const payload = {
  id: 1
  attributes: {
    name: "Kurtis Rainbolt-Greene",
    age: 26
  }
}

hammer("attributes")(payload)
```

Which returns:

``` javascript
{
  id: 1,
  name: "Kurtis Rainbolt-Greene",
  age: 26
}
```

[BADGE_TRAVIS]: https://img.shields.io/travis/krainboltgreene/ramda-extra.js.svg?maxAge=2592000&style=flat-square
[BADGE_VERSION]: https://img.shields.io/npm/v/ramda-extra.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/krainboltgreene/ramda-extra.js.svg?maxAge=2592000&style=flat-square
