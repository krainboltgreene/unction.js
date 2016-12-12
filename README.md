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


### mapKeys()

> Function -> Object -> Object

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

### hammer()

> String -> Object -> Object

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


### aside()

> ...Function -> Anything:a -> Anything:a

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


### isPresent()

> Anything -> Boolean

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


### computedProp()

> Function -> String | Array of Strings -> Object -> Object

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


### nestedObjOf()

> Array of Strings -> Anything -> Object

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


### mergeDeep()

> Object | Array -> Object | Array

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


### resolveP()

> Anything -> Promise(Anything)

See also: `allP()`

A port of the `Promise.resolve()` function.


### allP()

> Array of Anything -> Promise(Array of Anything)

See also: `resolveP()`

A port of the `Promise.all()` function.


### thenP()

> Function -> Promise -> Promise(Function)

See also: `catchP()`

A port of the `Promise.prototype.then()` function.


### catchP()

> Function -> Promise -> Promise(Function)

See also: `thenP()`

A port of the `Promise.prototype.catch()` function.


### tapP()

> Function -> Promise -> Promise

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


### asideP()

> ...Function -> Promise(Anything:a) -> Promise(Anything:a)

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


[BADGE_TRAVIS]: https://img.shields.io/travis/krainboltgreene/ramda-extra.js.svg?maxAge=2592000&style=flat-square
[BADGE_VERSION]: https://img.shields.io/npm/v/ramda-extra.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/krainboltgreene/ramda-extra.js.svg?maxAge=2592000&style=flat-square
