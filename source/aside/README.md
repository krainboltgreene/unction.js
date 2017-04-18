# ramda-aside

![Version][BADGE_VERSION]
![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> Array<(any => any)> -> any -> any

Use this function to do thing aside of a main pipeline.

``` javascript
import {pipe} from "ramda"
import aside from "ramda-aside"
import format from "../format"
import log from "../log"
import processData from "../processData"

export default function generateGraph () {
  return pipe(
    aside([format, log]),
    processData
  )
}
```

[BADGE_TRAVIS]: https://img.shields.io/travis/krainboltgreene/ramda-extra.js.svg?maxAge=2592000&style=flat-square
[BADGE_VERSION]: https://img.shields.io/npm/v/ramda-extra.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/krainboltgreene/ramda-extra.js.svg?maxAge=2592000&style=flat-square
