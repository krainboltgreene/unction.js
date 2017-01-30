// > ? Anything -> Boolean
//
// This lets you know if it's a non-null, non-undefined value.
//
// ``` javascript
// import {isPresent} from "ramda-extra"
//
// isPresent('x') // true
// isPresent([]) // true
// isPresent(null) // false
// isPresent(undefined) // false
// ```

import {isNil} from "ramda"

export default function isPresent (value) {
  return !isNil(value)
}
