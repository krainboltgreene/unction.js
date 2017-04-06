// ? Array<[mixed, mixed:a]> -> Array<mixed:a>

// Takes an array that looks like a list of pairs (key, values) and returns all the values.
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
// pairsValues(pairings)
// ```
//
// You would get the following:
//
// ``` javascript
// [
//   1,
//   2,
//   3,
// ]
// ```

import {last} from "ramda"
import {map} from "ramda"

export default function pairsValues (pairs: Array<[mixed, mixed]>): Array<mixed> {
  return map(last, pairs)
}
