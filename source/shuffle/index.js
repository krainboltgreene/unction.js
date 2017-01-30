// > ? Array of Anything:ab -> Array of Anything:ba
//
// Takes an Array and returns an Array with the same content, but in a random order.
//
//
// ``` javascript
// import {shuffle} from "ramda-extra"
// import {users} from "./users"
//
// console.log(users()) // => [{"id": 1, "name": "Kurtis Rainbolt-Greene"}, {"id": 2, "name": "Angela Englund"}, {"id": 3", "name": "Joshua Benitez"}]
//
// console.log(shuffle(users())) // => [{"id": 1, "name": "Kurtis Rainbolt-Greene"}, {"id": 3", "name": "Joshua Benitez"}, {"id": 2, "name": "Angela Englund"}]
//
// console.log(shuffle(users())) // => [{"id": 3", "name": "Joshua Benitez"}, {"id": 1, "name": "Kurtis Rainbolt-Greene"}, {"id": 2, "name": "Angela Englund"}]
//
// console.log(shuffle(users())) // => [{"id": 2, "name": "Angela Englund"}, {"id": 3", "name": "Joshua Benitez"}, {"id": 1, "name": "Kurtis Rainbolt-Greene"}]
// ```

import {length} from "ramda"

// While this raises eslint issues, they should be ignored. This is the best possible shuffle implementation I could find.
export default function shuffle (array) {
  let counter = length(array)
  let clone = array.slice()

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    const index = Math.floor(Math.random() * counter)

    // Decrease counter by 1
    counter--

    // And swap the last element with it
    const temp = clone[counter]

    clone[counter] = clone[index]
    clone[index] = temp
  }

  return clone
}
