// ? Array<[mixed:a, mixed]> -> Array<mixed:a>

// Takes an array that looks like a list of pairs (key, values) and returns all the keys.
//
// Lets say you have this data:
//
// ``` javascript
// const data = {
//   a: 1,
//   b: 2,
//   c: 3,
// }
// ```
//
// And you turn it into pairs:
//
// ``` javascript
// const pairings = toPairs(data)
// ```
//
// You would end up with this:
//
// ``` javascript
// [
//   ['a', 1],
//   ['b', 2],
//   ['c', 3],
// ]
// ```
//
// Now you just want the keys:
//
// ``` javascript
// pairsKeys(pairings)
// ```
//
// You would get the following:
//
// ``` javascript
// [
//   'a',
//   'b',
//   'c',
// ]
// ```

import {head} from "ramda"
import {map} from "ramda"

export default function pairsKeys (pairs: Array<[mixed, mixed]>): Array<mixed> {
  return map(head, pairs)
}
