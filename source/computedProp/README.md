# ramda-computedProp

![Version][BADGE_VERSION]
![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> (IterableType -> any) -> (KeyType | Array<KeyType>) -> IterableType -> IterableType

Given an object this function will return that object but with a new property, where the value is computed. The computation is given the object you'll be copying.

``` javascript
import computedProp from "ramda-computedProp"

const payload = {
  id: "1",
  attributes: {
    username: "krainboltgreene"
  }
}
const key = "tag"
const computer = ({id, attributes: {username}}) => `${username}#${id}`

computedProp(computer)(key)(payload)
```

Would return:

``` javascript
{
  id: "1",
  tag: "krainboltgreene#1",
  attributes: {
    username: "krainboltgreene"
  }
}
```

``` javascript
const multiKey = ["attributes", "tag"]

computedProp(computer)(key)(payload)
```

Would return:

``` javascript
{
  id: "1",
  attributes: {
    tag: "krainboltgreene#1",
    username: "krainboltgreene"
  }
}
```

[BADGE_TRAVIS]: https://img.shields.io/travis/krainboltgreene/ramda-extra.js.svg?maxAge=2592000&style=flat-square
[BADGE_VERSION]: https://img.shields.io/npm/v/ramda-extra.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/krainboltgreene/ramda-extra.js.svg?maxAge=2592000&style=flat-square
