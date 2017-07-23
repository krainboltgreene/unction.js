# @unction/compact

![Version][BADGE_VERSION]
![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> Array<any> -> Array<mixed>

Takes a collection (Array or Object) and returns a copy of that value without `null` or `undefined` values.


``` javascript
avatarUrls // => [null, "/1.jpg", null, "/3.jpg"]
compact(avatarUrls)  // => ["/1.jpg", "/3.jpg"]

head(users) // {"avatar": null, "name": "Kurtis Rainbolt-Greene"}
compact(head(users)) // {"name": "Kurtis Rainbolt-Greene"}
```

[BADGE_TRAVIS]: https://img.shields.io/travis/krainboltgreene/unction.js.svg?maxAge=2592000&style=flat-square
[BADGE_VERSION]: https://img.shields.io/npm/v/@unction/compact.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/krainboltgreene/unction.js.svg?maxAge=2592000&style=flat-square
