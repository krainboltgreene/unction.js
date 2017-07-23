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

![Version][BADGE_VERSION]
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

[BADGE_TRAVIS]: https://img.shields.io/travis/krainboltgreene/unction.js.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/krainboltgreene/unction.js.svg?maxAge=2592000&style=flat-square
