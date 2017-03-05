// > Array | Object -> Boolean
//
// Allows you to check if a container has any items.
//
// ``` javascript
// import {isPopulated} from "ramda"
//
// isPopulated([1]) // true
// isPopulated({a: 'b'}) // true
// isPopulated({}) // false
// isPopulated([]) // false
// ```

import {isEmpty} from "ramda"
import compact from "../compact"

export default function isPopulated (list: Array<*>): boolean {
  return !isEmpty(compact(list))
}
