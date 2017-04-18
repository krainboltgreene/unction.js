# ramda-shuffle

![Version][BADGE_VERSION]
![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> (string | Array<any>) -> (string | Array<any>)

Takes an Array and returns an Array with the same content, but in a random order.

``` javascript
import {shuffle} from "ramda-extra"
import {users} from "./users"

users()
```

Would return:

``` javascript
[{"id": 1, "name": "Kurtis Rainbolt-Greene"}, {"id": 2, "name": "Angela Englund"}, {"id": 3, "name": "Joshua Benitez"}]
```

``` javascript
shuffle(users())
```

Would return:

``` javascript
[{"id": 1, "name": "Kurtis Rainbolt-Greene"}, {"id": 3, "name": "Joshua Benitez"}, {"id": 2, "name": "Angela Englund"}]
```

``` javascript
shuffle(users())
```

Would return:

``` javascript
[{"id": 3, "name": "Joshua Benitez"}, {"id": 1, "name": "Kurtis Rainbolt-Greene"}, {"id": 2, "name": "Angela Englund"}]
```

``` javascript
shuffle(users())
```

Would return:

``` javascript
[{"id": 2, "name": "Angela Englund"}, {"id": 3, "name": "Joshua Benitez"}, {"id": 1, "name": "Kurtis Rainbolt-Greene"}]
```

[BADGE_TRAVIS]: https://img.shields.io/travis/krainboltgreene/ramda-extra.js.svg?maxAge=2592000&style=flat-square
[BADGE_VERSION]: https://img.shields.io/npm/v/ramda-extra.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/krainboltgreene/ramda-extra.js.svg?maxAge=2592000&style=flat-square
