// ? ({[key: mixed]: Promise<mixed> | mixed}) => Promise<{[key: mixed]: mixed}>

// This takes an object where the values are probably promises and returns a promise that has that 
// same object but with the resolved values.

// Here's a good example of this function in use:

// ``` javascript
// function signUp (attributes, slug) {
//   return function thunk (dispatch, getState, {client}) {
//     return allObjectP({
//       loading: startLoading(slug),
//       session: pushSession(attributes, client)
//     })
//       .then(({session}) => {
//         return allObjectP({
//           merge: mergeResource(session),
//           current: storeCurrent(session.id),
//           account: pullAccount(session.relationship.account.data.id, client),
//         })
//       })
//       .then(({account}) => {
//         return {
//           merge: mergeResource(account),
//           current: storeCurrent(account.id),
//         }
//       })
//       .then(() => stopLoading(slug))
//       .then(() => dispatch({type: "signUp"}))
//       .catch(logger.error.bind(error))
//   }
// }
// ```

// If we use `allP` or `Promise.all` we're getting an array back, but that's annoying to 
// destructure. The `allObjectP` function gives us the concurrency we want with a named
// interface for the returned resolutions.

import {toPairs} from "ramda"
import {zipObj} from "ramda"
import allP from "../allP"
import pairsKeys from "../pairsKeys"
import pairsValues from "../pairsValues"


export default function allObjectP (object: {[key: mixed]: Promise<mixed> | mixed}): Promise<{[key: mixed]: mixed}> {
  const pairs = toPairs(object)

  return allP(pairsValues(pairs))
    .then(function rezip (resolves: Array<Promise<mixed>>): {[key: mixed]: mixed} {
      return zipObj(pairsKeys(pairs))(resolves)
    })
}
