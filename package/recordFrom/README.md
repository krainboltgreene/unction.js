# @unction/recordFrom


![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

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

[BADGE_TRAVIS]: https://img.shields.io/travis/krainboltgreene/unction.js.svg?maxAge=2592000&style=flat-square

[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/krainboltgreene/unction.js.svg?maxAge=2592000&style=flat-square
