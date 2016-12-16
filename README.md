# ramda-extra

A set of useful functions that ramda won't implement that uses ramda.

![Version][BADGE_VERSION]
![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]


## using

You can import individual functions like so:

``` javascript
import {hammer} from "ramda-extras"
```


### mapKeys() ? Function -> Object:a -> Object:b

See also: `map()`, `mapObjIndexed()`

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

### hammer() ? String -> Object:a -> Object:ab

Use this to de-nest a nested object.

``` javascript
import {hammer} from "ramda-extra"

const payload = {
  id: 1
  attributes: {
    name: "Kurtis Rainbolt-Greene",
    age: 26
  }
}

hammer("attributes", payload)

// {
//   id: 1,
//   name: "Kurtis Rainbolt-Greene",
//   age: 26
// }
```


### aside() ? ...Function -> Anything:a -> Anything:a

See also: `pipe()`, `compose()`, `asideP()`

Use this function to do thing aside of a main pipeline.

``` javascript
import {pipe} from "ramda"
import {aside} from "ramda-extra"
import format from "../format"
import log from "../log"
import processData from "../processData"

export default function generateGraph () {
  return pipe(
    aside(format, log),
    processData
  )
}
```


### isPresent() ? Anything -> Boolean

See also: `isNil()`

This lets you know if it's a non-null, non-undefined value.

``` javascript
import {isPresent} from "ramda-extra"

isPresent('x') // true
isPresent([]) // true
isPresent(null) // false
isPresent(undefined) // false
```


### isPopulated()

> Array | Object -> Boolean

See also: `isEmpty()`

Allows you to check if a container has any items.

``` javascript
import {isPopulated} from "ramda"

isPopulated([1]) // true
isPopulated({a: 'b'}) // true
isPopulated({}) // false
isPopulated([]) // false
```


### computedProp() ? Function -> (String | Array of Strings) -> Object:a -> Object:ab

See also: `prop()`

Given an object this function will return that object but with a new property, where the value is computed. The computation is given the object you'll be copying.

``` javascript
import {computedProp} from "ramda-extra"

const payload = {
  id: "1",
  attributes: {
    username: "krainboltgreene"
  }
}
const key = "tag"
const computer = ({id, attributes: {username}}) => `${username}#${id}`

computedProp(computer, key, payload)
// {
//   id: "1",
//   tag: "krainboltgreene#1",
//   attributes: {
//     username: "krainboltgreene"
//   }
// }

const multiKey = ["attributes", "tag"]

computedProp(computer, key, payload)
// {
//   id: "1",
//   attributes: {
//     tag: "krainboltgreene#1",
//     username: "krainboltgreene"
//   }
// }
```


### nestedObjOf() ? Array of Strings -> Anything -> Object

See also: `objOf()`

Given a path and a value, it creates an object that has keys based on the path.

``` javascript
import {nestedObjOf} from "ramda-extra"

const path = ["key", "subkey"]
const value = "value"

nestedObjOf(path, value)
// {
//   key: {
//     subkey: "value"
//   }
// }
```


### mergeDeep() ? (Object of Anything | Array of Anything):a -> (Object of Anything | Array of Anything):b

Recursively merges two objects/arrays. THAT IS ALL.

``` javascript
import {mergeDeep} from "ramda-extra"

const left = {
  alpha: "1"
}
const right = {
  beta: "2"
}

mergeDeep(left, right)
// {
//   alpha: "1",
//   beta: "2"
// }
```

``` javascript
import {mergeDeep} from "ramda-extra"

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

mergeDeep(left, right)
// {
//   alpha: {
//     alpha1: "1"
//   },
//   beta: {
//     beta1: "1"
//   }
// }
```

``` javascript
import {mergeDeep} from "ramda-extra"

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

mergeDeep(left, right)
// {
//   alpha: [
//     "1",
//     "1"
//   ]
// }
```


### resolveP() ? Anything:a -> Promise(Anything:a)

See also: `allP()`

A port of the `Promise.resolve()` function.


### allP() ? Array of Anything -> Promise(Array of Anything)

>

See also: `resolveP()`

A port of the `Promise.all()` function.


### thenP() ? Function -> Promise(Anything):a -> Promise(Function):b

See also: `catchP()`

A port of the `Promise.prototype.then()` function.


### catchP() ? Function -> Promise(Anything):a -> Promise(Function):b

See also: `thenP()`

A port of the `Promise.prototype.catch()` function.


### tapP() ? Function -> Promise(Anything):a -> Promise(Anything):a

See also: `tap()`

Tap your function around a promise, and still return that promise. Note that this function is largely to serve as a solution to tap + promises. Consider this example:

``` javascript
import {tap} from "ramda"
import startLoading from "../startLoading"
import finishLoading from "../finishLoading"
import createAccount from "../createAccount"
import createSession from "../createSession"

export default function signUp (attributes) {
  return function future (dispatch, {sdk}) {
    return sdk
      .then(tap(startLoading))
      .then(tap(createAccount(attributes))
      .then(tap(createSession(attributes))
      .then(tap(finishLoading))
  }
}
```

Due to the way promises and tap work you would see these events:

```
startLoading
finishLoading
createAccount
createSession
```

But with `tapP()` you would get them in order:

``` javascript
import {tapP} from "ramda"
import startLoading from "../startLoading"
import finishLoading from "../finishLoading"
import createAccount from "../createAccount"
import createSession from "../createSession"

export default function signUp (attributes) {
  return function future (dispatch, {sdk}) {
    return sdk
      .then(tapP(startLoading))
      .then(tapP(createAccount(attributes))
      .then(tapP(createSession(attributes))
      .then(tapP(finishLoading))
  }
}
```

```
startLoading
createAccount
createSession
finishLoading
```


### asideP() ? ...Function -> Promise(Anything:a) -> Promise(Anything:a)

See also: `pipe()`, `compose()`, `aside()`

Use this function to do things aside of a main pipeline, while also allowing for promise resolution.

This differs from `aside()` in that an incoming value can be a promise and all functions given will resolve before passing on.

``` javascript
import {asideP} from "ramda-extra"
import startLoading from "./startLoading"
import finishLoading from "./finishLoading"

export default function listAccounts () {
  return function future (dispatch, {sdk}) {
    return sdk
      .then(asideP(startLoading, dispatch))
      .then((client) => client("v1/accounts").list())
      .then(asideP(finishLoading, dispatch))
  }
}
```


### compact() ? (Object of Anything|Array of Anything):ab -> (Object of Anything|Array of Anything):b

Takes a collection (Array or Object) and returns a copy of that value without `null` or `undefined` values.

See also: `reject()`


``` javascript
import {prop} from "ramda"
import {head} from "ramda"
import {compact} from "ramda-extra"
import {users} from "./users"

const avatarUrls = map(prop("avatar"), users())
console.log(avatarUrls) // => [null, "/1.jpg", null, "/3.jpg"]
console.log(compact(avatarUrls))

const attributes = head(users)
console.log(attributes) // {"avatar": null, "name": "Kurtis Rainbolt-Greene"}
console.log(compact(attributes)) // {"name": "Kurtis Rainbolt-Greene"}
```


### sample() ? Integer:size -> Array of Anything:ab -> Array of Anything:b

Takes an Array and randomly picks *Integer:size* elements to return.

See also: `shuffle()`, `take()`


``` javascript
import {sample} from "ramda-extra"
import {users} from "./users"

console.log(users()) // => [{"id": 1, "name": "Kurtis Rainbolt-Greene"}, {"id": 2, "name": "Angela Englund"}]

const game1Winner = sample(1, users())
console.log(game1Winner) // => {"id": 2, "name": "Angela Englund"}

const game2Winner = sample(1, users())
console.log(game2Winner) // => {"id": 2, "name": "Angela Englund"}

const game3Winner = sample(1, users())
console.log(game3Winner) // => {"id": 1, "name": "Kurtis Rainbolt-Greene"}
```


### shuffle() ? Array of Anything:ab -> Array of Anything:ba

Takes an Array and returns an Array with the same content, but in a random order.

See also: `sample()`


``` javascript
import {shuffle} from "ramda-extra"
import {users} from "./users"

console.log(users()) // => [{"id": 1, "name": "Kurtis Rainbolt-Greene"}, {"id": 2, "name": "Angela Englund"}, {"id": 3", "name": "Joshua Benitez"}]

console.log(shuffle(users())) // => [{"id": 1, "name": "Kurtis Rainbolt-Greene"}, {"id": 3", "name": "Joshua Benitez"}, {"id": 2, "name": "Angela Englund"}]

console.log(shuffle(users())) // => [{"id": 3", "name": "Joshua Benitez"}, {"id": 1, "name": "Kurtis Rainbolt-Greene"}, {"id": 2, "name": "Angela Englund"}]

console.log(shuffle(users())) // => [{"id": 2, "name": "Angela Englund"}, {"id": 3", "name": "Joshua Benitez"}, {"id": 1, "name": "Kurtis Rainbolt-Greene"}]
```


[BADGE_TRAVIS]: https://img.shields.io/travis/krainboltgreene/ramda-extra.js.svg?maxAge=2592000&style=flat-square
[BADGE_VERSION]: https://img.shields.io/npm/v/ramda-extra.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/krainboltgreene/ramda-extra.js.svg?maxAge=2592000&style=flat-square
