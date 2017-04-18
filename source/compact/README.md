# ramda-compact

![Version][BADGE_VERSION]
![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> Array<any> -> Array<mixed>

Takes a collection (Array or Object) and returns a copy of that value without `null` or `undefined` values.


``` javascript
import {prop} from "ramda"
import {head} from "ramda"
import compact from "ramda-compact"
import {users} from "./users"

const avatarUrls = map(prop("avatar"), users())
console.log(avatarUrls) // => [null, "/1.jpg", null, "/3.jpg"]
console.log(compact(avatarUrls))

const attributes = head(users)
console.log(attributes) // {"avatar": null, "name": "Kurtis Rainbolt-Greene"}
console.log(compact(attributes)) // {"name": "Kurtis Rainbolt-Greene"}
```

[BADGE_TRAVIS]: https://img.shields.io/travis/krainboltgreene/ramda-extra.js.svg?maxAge=2592000&style=flat-square
[BADGE_VERSION]: https://img.shields.io/npm/v/ramda-extra.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/krainboltgreene/ramda-extra.js.svg?maxAge=2592000&style=flat-square
