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

> Function -> Pairs -> Pairs

Like ramda's map, but instead of the value it maps over keys.

See also: map(), mapObjIndexed()

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

> Anything -> Pairs -> Pairs

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

> ...Function -> Anything/a -> Anything/a

Use this function to do thing aside of a main pipeline.

See also: pipe(), compose()

``` javascript
import {aside} from "ramda-extra"
import startLoading from "./startLoading"
import finishLoading from "./finishLoading"

export default function listAccounts () {
  return function future (dispatch, {sdk}) {
    return sdk
      .then(aside(startLoading, dispatch))
      .then((client) => client("v1/accounts").list())
      .then(aside(finishLoading, dispatch))
  }
}
```


### isPresent()

> Anything -> Boolean

This lets you know if it's a non-null, non-undefined value.

See also: isNil()

``` javascript
import {isPresent} from "ramda-extra"

isPresent('x') // true
isPresent([]) // true
isPresent(null) // false
isPresent(undefined) // false
```


### isPopulated()

> Array | Object -> Boolean

Allows you to check if a container has any items.

See also: isEmpty()

``` javascript
import {isPopulated} from "ramda"

isPopulated([1]) // true
isPopulated({a: 'b'}) // true
isPopulated({}) // false
isPopulated([]) // false
```


### computedProp()

> Function -> String | Array of Strings -> Object -> Object

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

Given a path and a value, it creates an object that has keys based on the path.

See also: objOf()

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

[BADGE_TRAVIS]: https://img.shields.io/travis/krainboltgreene/ramda-extra.js.svg?maxAge=2592000&style=flat-square
[BADGE_VERSION]: https://img.shields.io/npm/v/ramda-extra.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/krainboltgreene/ramda-extra.js.svg?maxAge=2592000&style=flat-square
