# @unction/complete

A set of very useful function. These functions are bound by these principles:

  1. All functions will have type annotations.
  2. All functions will only take a single argument.
  3. All functions are curried.
  4. All inner functions will be named based on the outer function and it's argument name.
  5. Functions that deal with key values will take KeyChains (a list of keys).
  6. Functions that deal with types will take their string name form.
  7. Functions that mutate the original value, though rare, will have a suffix of `M`.
  8. Functions that take or return promises will have a suffix of `P`.
  9. Functions that can work on one type of Iterable can work on another type, covering:
    1. Array
    2. Set
    3. Map
    4. Object (record)
    5. String


![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]


## using

Each function is a unique package with it's own source, transpiliation, and tests. To get a function simply install:

```
$ npm install --save-dev @unction/hammer@latest
```

and then import:

``` javascript
import hammer from "@unction/hammer"
```


## @unction/allObjectP


> ({[key: KeyType]: any | Promise<any>}) => Promise<{[key: KeyType]: any}>

This takes an object where the values are probably promises and returns a promise that has that same object but with the resolved values.

Here's a good example of this function in use:

``` javascript
function signUp (attributes, slug) {
  return function thunk (dispatch, getState, {client}) {
    return allObjectP({
      loading: startLoading(slug),
      session: pushSession(attributes, client)
    })
      .then(({session}) => {
        return allObjectP({
          merge: mergeResource(session),
          current: storeCurrent(session.id),
          account: pullAccount(session.relationship.account.data.id, client),
        })
      })
      .then(({account}) => {
        return {
          merge: mergeResource(account),
          current: storeCurrent(account.id),
        }
      })
      .then(() => stopLoading(slug))
      .then(() => dispatch({type: "signUp"}))
      .catch(logger.error.bind(error))
  }
}
```

If we use `allP` or `Promise.all` we're getting an array back, but that's annoying to destructure. The `allObjectP` function gives us the concurrency we want with a named interface for the returned resolutions.



## @unction/allP


> Array<any | Promise<any>> -> Promise<Array<any>>

A port of the `Promise.all()` function.

Credit: @keithamus



## @unction/always


> any -> any -> any

Always returns the value given when called

``` javascript
always(1)() // 1
always(1)(0) // 1
```



## @unction/append


> any -> Array<any> -> Array<any>

Takes a value and puts it at the end of the given list

``` javascript
append(4)([5]) // => [5, 4]
```



## @unction/appendM


> any -> Array<any> -> Array<any>

Takes an array and an item and returns the combination of both, appended.

NOTE: This mutates the array

``` javascript
const data = [1, 2, 3]

appendM(4)(data)
```

Would return:

``` javascript
[1, 2, 3, 4]
```



## @unction/applicator


> (ValueType -> any) -> any

Takes a function and a value and applies that function to that value.

``` javascript
applicator(inc)(1) // 1
```



## @unction/applicators


> Iterable<ValueType -> ValueType> -> Iterable<ValueType> -> Array<ValueType>

Takes a list of functions and a list of values and applies the values to the functions.

``` javascript
applicators([
  recordfrom(["point", "x"]),
  recordfrom(["point", "y"]),
  recordfrom(["point", "z"]),
])([
  40.453,
  2.2,
  423.0,
])
```

returns

``` javascript
[
  {point: {x: 40.453}},
  {point: {y: 2.2}},
  {point: {z: 423.0}},
]
```

``` javascript
applicators({
  x: inc,
  y: dec
})({
  x: -1,
  y: 1
})
```

returns

``` javascript
{
  x: 0,
  y: 0
}
```



## @unction/arrayify


> any -> [any] | Array<any>

Takes a value and turns it into an array of that value, unless the value is already an array.

``` javascript
arrayify("a")
```

returns

``` javascript
["a"]
```

``` javascript
arrayify(["a"])
```

returns

``` javascript
["a"]
```



## @unction/aside


> Array<(any => any)> -> any -> any

Use this function to do thing aside of a main pipeline.

``` javascript
export default function generateGraph () {
  return pipe(
    aside([format, log]),
    processData
  )
}
```



## @unction/attach


> KeyType -> ValueType -> IterableType -> IterableType

A polymorphic way to attach a value to an iterable

``` javascript
attach("hello")("world")({}) // => {hello: "world"}
```



## @unction/cascadingKeyChain


> Array<UnfinishedKeyChainType> -> IterableType -> ValueType

Cascades through multiple keychains in order to arrive at a value. Null keys are replaced with the previous keychain's value.

``` javascript
cascadingKeyChain(
  [
    ["ephemeral", "current", "session"],
    ["resources", "sessions", null, "relationships", "account", "data", "id"],
    ["resources", "accounts", null, "attributes", "name"]
  ]
)(
  {
    ephemeral: {current: {session: "1"}},
    resources: {
      sessions: {
        1: {
          id: "1",
          relationships: {account: {data: {id: "2"}}},
        },
      },
      accounts: {
        2: {
          id: "2",
          attributes: {name: "Kurtis Rainbolt-Greene"},
        },
      },
    },
  }
)
```

returns

``` javascript
"Kurtis Rainbolt-Greene"
```



## @unction/catchP


> (any -> any) -> Promise<any> -> Promise<any>

A port of the `Promise.prototype.catch()` function.

Credit: @keithamus



## @unction/compact


> Array<any> -> Array<mixed>

Takes a collection (Array or Object) and returns a copy of that value without `null` or `undefined` values.


``` javascript
avatarUrls // => [null, "/1.jpg", null, "/3.jpg"]
compact(avatarUrls)  // => ["/1.jpg", "/3.jpg"]

head(users) // {"avatar": null, "name": "Kurtis Rainbolt-Greene"}
compact(head(users)) // {"name": "Kurtis Rainbolt-Greene"}
```



## @unction/computedProp


> (IterableType -> any) -> Keychain -> IterableType -> IterableType

Given an object this function will return that object but with a new property, where the value is computed. The computation is given the object you'll be copying.

``` javascript
const computer = ({id, attributes: {username}}) => `${username}#${id}`
const key = "tag"
const payload = {
  id: "1",
  attributes: {
    username: "krainboltgreene"
  }
}

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



## @unction/couple


> any -> any -> [any, any]

Takes any value and then any value and returns an array containing those values.

``` javascript
couple(4)(5) // => [4, 5]
```



## @unction/domEvents


> DOMEventsConfigurationType -> EventNameType -> DOMObservableType -> ObservableType<EventType>

Takes a configuration, an event name, and a DOM source and returns an observable of that event type

``` javascript
domEvents({})("click")(DOM)
```

returns

``` javascript
--click--click--click-->
```



## @unction/domEventsMany


> domEventsManyConfigurationType -> (string | Array<EventNameType>) -> ObservableType<EventType>

Takes many events or * and returns an observable of those events

``` javascript
domEventsMany({})(["click", "input"])(DOM)
```

returns

``` javascript
--click--input--input--click--input
```

``` javascript
domEventsMany({})("*")(DOM)
```

returns

``` javascript
--click--input--hover--change--click-->
```



## @unction/endsWith


> string -> string -> boolean

Determines if a given subset of text is at the end of another set of text.

const data = "Hello, world!"

``` javascript
endsWith("!")(data) // true
```



## @unction/everyP


> (Array<any | Promise<any>>) -> Promise<[ResolvedPromisesType, RejectedPromisesType]>

Returns both resolved and rejected promises as distinct lists.



## @unction/flattenTree


> ((any -> any) -> IterableType -> IterableType) -> (any -> any) -> number -> IterableType -> IterableType

Takes a tree and creates a single object where the root keys are conjoined nested keys.

``` javascript
flattenTree({
  data: {
    profile: {
      name: "Kurtis Rainbolt-Greene"
      age: 24
    },
    metadata: {
      interval: "10s"
    },
    location: "http://api.example.com/profiles/24"
  }
})
```

Would return:

``` javascript
{
  "data-profile-name": "Kurtis Rainbolt-Greene",
  "data-profile-age": 24,
  "data-interval": "10s",
  "data-location": "Kurtis Rainbolt-Greene"
}
```



## @unction/flip


> (any -> any) -> any -> any -> any

Flips a function's first and second arguments.

``` javascript
flip(key)({aaa: "1"})("aaa") // "1"
```



## @unction/forEach


> (any -> KeyType -> any) -> IterableType -> IterableType

Takes any kind of iterable object and figures out the best way to iterate over it.

``` javascript
forEach((x) => y)([])
forEach((x) => y)(new Map)
forEach((x) => y)({})
```



## @unction/hammer


> KeyType -> IterableType -> IterableType

Use this to de-nest a nested object.

``` javascript
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



## @unction/ifThenElse


> PredicateType -> (any -> any) -> (any -> any) -> any

Based on a predicate it passes the value to a consequent or alternative function

``` javascript
ifThenElse(isEven)(toString)(toFloat)(1) // 1.0
ifThenElse(isEven)(toString)(toFloat)(2) // "2"
```



## @unction/isArray


> string -> any -> boolean

Takes any value and then any value and returns an array containing those values.

``` javascript
isArray({}) // => true
isArray([]) // => true
isArray("") // => false
```



## @unction/isIterable


> string -> any -> boolean

Takes any value and then any value and returns an array containing those values.

``` javascript
isIterable({}) // => true
isIterable([]) // => true
isIterable("") // => false
```



## @unction/isNil


> ValueType -> boolean

Determines if a value is not a value.

``` javascript
isNil(null) // true
isNil(undefined) // true
isNil(0) // false
isNil("") // false
isNil([]) // false
isNil({}) // false
```



## @unction/isObject


> string -> any -> boolean

Takes any value and then any value and returns an array containing those values.

``` javascript
isObject({}) // => true
isObject([]) // => true
isObject("") // => false
```



## @unction/isPopulated


> IterableType -> boolean

Allows you to check if a container has any items.

``` javascript
isPopulated([1]) // true
isPopulated({a: 'b'}) // true
isPopulated({}) // false
isPopulated([]) // false
```



## @unction/isPresent


> any -> boolean

This lets you know if it's a non-null, non-undefined value.

``` javascript
isPresent('x') // true
isPresent([]) // true
isPresent(null) // false
isPresent(undefined) // false
```



## @unction/isType


> string -> any -> boolean

Takes any value and then any value and returns an array containing those values.

``` javascript
isType("Object")({}) // => true
isType("Array")([]) // => true
isType("String")("") // => true
```



## @unction/itself


> any -> any

Always returns the value given when calling.

``` javascript
itself(1) // 1
itself(1) // 1
```



## @unction/key


> KeyType -> any -> ValueType

Returns the value of a specific key on an iterable. If no key is found it returns undefined. If the second argument isn't an iterable we return undefined, to allow for graceful failure.

``` javascript
key("aaa")({aaa: "1"}) // "1"
key("bbb")({aaa: "1"}) // undefined
key("bbb")(undefined) // undefined
key(0)(["aaa"]) // "aaa"
```



## @unction/keyChain


> KeyChainType -> TreeType -> ValueType

Takes a chain of keys and a tree, traversing down and reaching the last value. If any part of the chain is undefined or not an object the result will always be undefined.

``` javascript
keyChain(["aaa", "bbb", "ccc"])({aaa: {bbb: {ccc: "1"}}}) // "1"
keyChain(["aaa", "ddd", "ccc"])({aaa: {bbb: {ccc: "1"}}}) // undefined
```



## @unction/lacksText


> (string | RegExp) -> string -> boolean

Determines if a set of text does not have a subset of text.

``` javascript
const data = "I love pies!"
const lacksBestFood = lacksText("pizza")

lacksBestFood(data) // false
```

``` javascript
const data = "I love pies!"
const lacksPuncation = lacksText(/\!|\?|\./)

lacksPuncation(data) // false
```



## @unction/mapKeys


> (KeyType -> KeyType) -> IterableType -> IterableType

Like ramda's map, but instead of the value it maps over keys.

``` javascript
const attributes = {
  name: "Kurtis Rainbolt-Greene",
  createdAt: new Date()
}

mapKeys(kebab)(attributes)
```

Would return:

``` javascript
{
  name: "Kurtis Rainbolt-Greene",
  "created-at": new Date()
}
```



## @unction/mapKeysWithValueKey


> (ValueType => KeyType => KeyType) -> IterableType -> IterableType

Map over keys with the context of the value and key.

``` javascript
const attributes = {
  name: "Kurtis Rainbolt-Greene",
  createdAt: new Date()
}

mapKeys((value) => (key) => )(attributes)
```

Would return:

``` javascript
{
  name: "Kurtis Rainbolt-Greene",
  "created-at": new Date()
}
```

[BADGE_VERSION]: https://img.shields.io/npm/v/mapkeyswithvaluekey.svg?maxAge=2592000&style=flat-square


## @unction/mapValues


> (any -> any) -> IterableType -> IterableType

A pretty standard `mapValues()`, but with enforced unary currying.

``` javascript
mapValues(
  (value) => value + 1
)(
  [1, 2, 3]
)
```

Which will return:

``` javascript
[2, 3, 4]
```



## @unction/mapValuesWithValueKey


> (any => KeyType => any) -> IterableType -> IterableType

Just like map, but gives back the index argument (as an integer, not a string if array)

[BADGE_VERSION]: https://img.shields.io/npm/v/mapvalueswithvaluekey.svg?maxAge=2592000&style=flat-square


## @unction/mergeDeepLeft


> IterableType -> IterableType -> IterableType

Recursively merges two objects/arrays. Merges objects with `merge` and arras with concat. Prefers left. THAT IS ALL.

``` javascript
const left = {
  alpha: "1"
}
const right = {
  beta: "2"
}

mergeDeepLeft(left)(right)
{
  alpha: "1",
  beta: "2"
}
```

``` javascript
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

mergeDeepLeft(left)(right)
{
  alpha: {
    alpha1: "1"
  },
  beta: {
    beta1: "1"
  }
}
```

``` javascript
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

mergeDeepLeft(left)(right)
{
  alpha: [
    "1",
    "1"
  ]
}
```



## @unction/mergeDeepRight


> IterableType -> IterableType -> IterableType

Recursively merges two objects/arrays. Merges objects with `merge` and arras with concat. Prefers right. THAT IS ALL.

``` javascript
const left = {
  alpha: "1"
}
const right = {
  beta: "2"
}

mergeDeepRight(left)(right)
{
  alpha: "1",
  beta: "2"
}
```

``` javascript
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

mergeDeepRight(left)(right)
{
  alpha: {
    alpha1: "1"
  },
  beta: {
    beta1: "1"
  }
}
```

``` javascript
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

mergeDeepRight(left)(right)
{
  alpha: [
    "1",
    "1"
  ]
}
```



## @unction/mergeLeft


> IterableType -> IterableType -> IterableType

Merges two iterables, preferring left.

``` javascript
const left = {
  alpha: "1",
  beta: "1"
}
const right = {
  beta: "2",
  zeta: "3"
}

mergeLeft(left)(right)
```

Which returns:

``` javascript
{
  alpha: "1",
  beta: "1",
  zeta: "3"
}
```



## @unction/mergeRight


> IterableType -> IterableType -> IterableType

mergeRights two iterables.

``` javascript
const left = {
  alpha: "1",
  beta: "1"
}
const right = {
  beta: "2",
  zeta: "3"
}

mergeRight(left)(right)
```

Which returns:

``` javascript
{
  alpha: "1"
  beta: "2",
  zeta: "3"
}
```



## @unction/mergeWith


> (ValueType -> ValueType -> any) -> IterableType -> IterableType -> IterableType

Merges two iterables and uses a provided function to handle conflicts. The function is given the the left value and the right value.

``` javascript
const left = {
  alpha: "0",
  beta: "1",
  zeta: "3"
}
const right = {
  alpha: "0",
  beta: "2",
  zeta: "3"
}

mergeWith((l) => (r) => l+r)(left)(right)
```

Which returns:

``` javascript
{
  alpha: "0",
  beta: "12",
  zeta: "3"
}
```



## @unction/mergeWithKey


> (IterableType -> IterableType -> KeyType -> any) -> IterableType -> IterableType -> IterableType

Merges two iterables and uses a provided function to handle conflicts. The function is given the key, the left value, and the right value.

``` javascript
const left = {
  beta: "1"
}
const right = {
  beta: "2"
}

mergeWith((key, leftValue, rightValue) => key+leftValue+rightValue)(left)(right)
```

Which returns:

``` javascript
{
  beta: "beta12"
}
```



## @unction/nestedApply


> ((any -> any) -> IterableType -> IterableType) -> (any -> any) -> number -> IterableType -> IterableType

Takes a function (the application) that takes function(s) (later referred to as
the inner) and value(s) (`map()`, `forEach()`, `find()`), a function (the inner)
that will be applied to a value(s), and finally a number (depth) to apply that
applicator around the inner.

In the below example we want to take two sets of records and index them by id:

``` javascript
const records = [
  [
    {
      id: "a1",
      type: "commercial",
    },
    {
      id: "a2",
      type: "commercial",
    }
  ],
  [
    {
      id: "b1",
      type: "residential",
    },
    {
      id: "b2",
      type: "residential",
    }
  ]
]
```

Normally we'd just do `mapValues(indexBy(key("id")))`, however we can make this easier and dynamic:

``` javascript
const nestedIndexById = nestedApply(mapValues)(indexBy(key("id")))(1)

nestedIndexById(records)
```

And the result:

``` javascript
[
  {
    a1: {
      id: "a1",
      type: "commercial",
    },
    a2: {
      id: "a2",
      type: "commercial",
    },
  },
  {
    b1: {
      id: "b1",
      type: "residential",
    },
    b2: {
      id: "b2",
      type: "residential",
    },
  },
]
```



## @unction/optimisticP


> Array<any | Promise<any>> -> Promise<Array<any>>

Will take an array of promises and returns a promise of only the resolved promises.



## @unction/pairsKeys


> Array<[string, any]> -> Array<string>

Takes an array that looks like a list of pairs (key, values) and returns all the keys.

Lets say you have this data:

``` javascript
const data = {
  a: 1,
  b: 2,
  c: 3,
}
```

And you turn it into pairs:

``` javascript
const pairings = toPairs(data)
```

You would end up with this:

``` javascript
[
  ['a', 1],
  ['b', 2],
  ['c', 3],
]
```

Now you just want the keys:

``` javascript
pairsKeys(pairings)
```

You would get the following:

``` javascript
[
  'a',
  'b',
  'c',
]
```



## @unction/pairsValues


> Array<[KeyType, any]> -> Array<any>

Takes an array that looks like a list of pairs (key, values) and returns all the values.

Lets say you have this data:

``` javascript
const data = {
  a: 1,
  b: 2,
  c: 3,
}
```

And you turn it into pairs:

``` javascript
const pairings = toPairs(data)
```

You would end up with this:

``` javascript
[
  ['a', 1],
  ['b', 2],
  ['c', 3],
]
```

Now you just want the keys:

``` javascript
pairsValues(pairings)
```

You would get the following:

``` javascript
[
  1,
  2,
  3,
]
```



## @unction/pluck


> KeyChainType -> IterableType -> Array<any>

Given a keychain and records return the values at the keychain for each record.

``` javascript
pluck(
  ["attributes", "name"]
)(
  [
    {
      id: "1",
      attributes: {
        name: "Kurtis",
        age: 29,
        height: "5'10\"",
      },
    },
    {
      id: "2",
      attributes: {
        name: "Chris",
        age: 29,
        height: "5'8\"",
      },
    },
  ]
)
```

Which will return:

``` javascript
[
  "Kurtis",
  "Chris"
]
```



## @unction/plucks


> Array<KeyChainType> -> IterableType -> Array<any>

Given keychain and records, return the values at the keychain for each record.

``` javascript
plucks(
  [
    ["attributes", "name"],
    ["attributes", "age"],
    ["attributes", "friends"],
    ["id"]
  ]
)(
  [
    {
      id: "1",
      attributes: {
        name: "Kurtis",
        age: 29,
        height: "5'10\"",
      },
    },
    {
      id: "2",
      attributes: {
        name: "Chris",
        age: 29,
        height: "5'8\"",
      },
    },
  ]
)
```

Which will return:

``` javascript
[
  ["Kurtis", 29, null, "1"],
  ["Chris", 29, null, "2"]
]
```



## @unction/prepend


> any -> Array<any> -> Array<any>

Takes a value and puts it at the end of the given list

``` javascript
prepend(4)([5]) // => [4, 5]
```



## @unction/recordFrom


> KeyChain -> any -> IterableType

Given a keychain and a value it creates an object that has keys based on the keychain.

``` javascript
recordFrom(["key", "subkey"])("value")
```

Which returns:

``` javascript
{
  key: {
    subkey: "value"
  }
}
```



## @unction/reduceValues


> (AccumulatedType -> ValueType -> AccumulatedType) -> InitialType -> IterableType -> AccumulatedType

A pretty standard `reduceValues()`, but where the `𝑓()` is unary curries.

``` javascript
reduceValues(
  (accumulation) => (current) => `${accumulation}/${current}`
)(
  "~"
)(
  ["Users", "krainboltgreene", "Code"]
)
```

Which will return:

``` javascript
"~/Users/krainboltgreene/Code"
```



## @unction/reduceWithValueKey


> (AccumulatedType -> ValueType -> KeyType -> AccumulatedType) -> InitialType -> IterableType -> AccumulatedType

A pretty standard `reduceWithValueKey()`, but where the `𝑓()` is unary curries.

``` javascript
reduceWithValueKey(
  (accumulation) => (current) => (key) => `${accumulation}/${current}:${key}`
)(
  "~"
)(
  ["Users", "krainboltgreene", "Code"]
)
```

Which will return:

``` javascript
"~/Users:0/krainboltgreene:1/Code:2"
```



## @unction/rejectP


> any -> Promise<any>

A port of the `Promise.reject()` function.

Credit: @keithamus




## @unction/replacewhen


> PredicateType -> ValueType -> IterableType

Replaces values in an iterable with another value based on a predicate.

``` javascript
replaceWhen(isEven)(null)([1, 2, 3]) // [1, null, 3]
```



## @unction/resolveP


> any -> Promise<any>

A port of the `Promise.resolve()` function.

Credit: @keithamus



## @unction/sample


> (string | Array<any>) -> (string | any)

Takes an Array or string and randomly one element to return.

``` javascript
users() // => [{"id": 1, "name": "Kurtis Rainbolt-Greene"}, {"id": 2, "name": "Angela Englund"}]

sample(users()) // => {"id": 2, "name": "Angela Englund"}

sample(users()) // => {"id": 2, "name": "Angela Englund"}

sample(users()) // => {"id": 1, "name": "Kurtis Rainbolt-Greene"}
```



## @unction/sampleSize


> number -> (string | Array<any>) -> (string | any)

Takes an Array or string and randomly picks *n* elements to return, but never the same one.

``` javascript
users() // => [{"id": 1, "name": "Kurtis Rainbolt-Greene"}, {"id": 2, "name": "Angela Englund"}]

sample(1)(users()) // => [{"id": 2, "name": "Angela Englund"}]

sample(2)(users()) // => [{"id": 2, "name": "Angela Englund"}, {"id": 1, "name": "Kurtis Rainbolt-Greene"}]
```



## @unction/shuffle


> (string | Array<any>) -> (string | Array<any>)

Takes an Array and returns an Array with the same content, but in a random order.

``` javascript
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



## @unction/splat


> (ValueType -> any) -> Array<ValueType> -> any

Takes a function and a list of values and recursively applies the value to the functions.

``` javascript
splat((a) => (b) => a + b)([1, 2]) // 3
```



## @unction/startsWith


> string -> string -> boolean

Determines if a given subset of text is at the start of another set of text.

``` javascript
startsWith("Hello")(data)
```

Would return:

``` javascript
true
```



## @unction/thenCatchP


> (any -> any) -> (any -> any) -> Promise<any> ->  Promise<any>

A port of the `Promise.prototype.then()` function, but with the extra catch argument.

Credit: @keithamus



## @unction/thenP


> (any -> any) -> Promise<any> -> Promise<any>

A port of the `Promise.prototype.then()` function.

Credit: @keithamus



## @unction/thrush


> any -> (any -> any) -> any

One of the fantasy birds: it takes a value, a function, and then applies that value to as the first argument to that function.

``` javascript
thrush(0)((value) => `${value}`) // "0"
```



## @unction/treeify


> Array<(any -> IterableType -> IterableType)> -> Array<IterableType> -> IterableType

This takes a list of functions (the folders) and an array of objects or an
object of objects (the collection) to create a tree. Each function in
the list of folders will in some way return a new object. All of the objects
produced are then turned into a final tree.

``` javascript
const collection = [
  {
    id: "a1",
    type: "resources",
    attributes: {
      version: "v1",
      namespace: "accounts",
    }
  },
  {
    id: "a2",
    type: "resources",
    attributes: {
      version: "v1",
      namespace: "accounts",
    }
  },
  {
    id: "b1",
    type: "resources",
    attributes: {
      version: "v1",
      namespace: "profiles",
    }
  },
  {
    id: "b1",
    type: "resources",
    attributes: {
      version: "v2",
      namespace: "profiles",
    }
  }
]
````

The order goes from outer layer to deeper layer, so in this case the outer
level properties will be based on `key("type")`, and the deepest layer
properties will be based on `key("id")`.

``` javascript
const functions = [
  groupBy(key("type")),
  groupBy(keyChain(["attributes", "namespace"])),
  groupBy(keyChain(["attributes", "version"])),
  indexBy(key("id")),
]

treeify(functions)(collection)
```

The resulting object looks like this:

``` javascript
{
  resources: {
    accounts: {
      v1: {
        a1: {
          id: "a1",
          type: "resources",
          attributes: {
            version: "v1",
            namespace: "accounts",
          }
        },
        a2: {
          id: "a2",
          type: "resources",
          attributes: {
            version: "v1",
            namespace: "accounts",
          }
        }
      }
    },
    profiles: {
      v1: {
        b1: {
          id: "b1",
          type: "resources",
          attributes: {
            version: "v1",
            namespace: "profiles",
          }
        }
      },
      v2: {
        b1: {
          id: "b1",
          type: "resources",
          attributes: {
            version: "v2",
            namespace: "profiles",
          }
        }
      }
    }
  }
}
```



## @unction/type


> any -> string

Returns the type name of the value provided.

``` javascript
type("a") // "String"
type(1) // "Number"
type({}) // "Object"
type([]) // "Array"
type(true) // "Boolean"
type(null) // "null"
type(undefined) // "undefined"
```



## @unction/upTo


> number -> Array<number>

Just takes a maximum and produces an array of 1 to that number.



## @unction/withoutKeyRecursive


> KeyType -> IterableType -> IterableType

Returns a copy of an iterable without a key, no matter how deep the tree.

``` javascript
withoutKeyRecursive("__abstraction__")(
  {
    id: "1",
    name: "Kurtis Rainbolt-Greene",
    attributes: {
      version: "v1",
      namespace: "accounts",
      __abstraction__: {errors: []},
    },
    __abstraction__: {errors: []},
  }
)
```

Which will return:

``` javascript
{
  id: "1",
  name: "Kurtis Rainbolt-Greene",
  attributes: {
    version: "v1",
    namespace: "accounts",
  },
}
```



## @unction/zip


> IterableType -> IterableType -> IterableType

Takes two iterables and merges them together, combining their values into an array

``` javascript
zip([1, 2, 3])([4, 5, 6])
```

returns

``` javascript
[[1, 4], [2, 5], [3, 6]]
```

``` javascript
zip({x: 1, y: 2, z: 0})({x: 0, y: 0, z: 0})
```

returns

``` javascript
{x: [1, 0], y: [2, 0], z: [0, 0]}
```


[BADGE_TRAVIS]: https://img.shields.io/travis/krainboltgreene/unction.js.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/krainboltgreene/unction.js.svg?maxAge=2592000&style=flat-square

