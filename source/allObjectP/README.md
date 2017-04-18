# ramda-allObjectP

![Version][BADGE_VERSION]
![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> ({[key: KeyType]: any | Promise<any>}) => Promise<{[key: KeyType]: any}>

This takes an object where the values are probably promises and returns a promise that has that
same object but with the resolved values.

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

If we use `allP` or `Promise.all` we're getting an array back, but that's annoying to
destructure. The `allObjectP` function gives us the concurrency we want with a named
interface for the returned resolutions.

[BADGE_TRAVIS]: https://img.shields.io/travis/krainboltgreene/ramda-extra.js.svg?maxAge=2592000&style=flat-square
[BADGE_VERSION]: https://img.shields.io/npm/v/ramda-extra.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/krainboltgreene/ramda-extra.js.svg?maxAge=2592000&style=flat-square
