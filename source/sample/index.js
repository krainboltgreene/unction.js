// > ? Integer:size -> Array of Anything:ab -> Array of Anything:b
//
// Takes an Array and randomly picks *Integer:size* elements to return.
//
//
// ``` javascript
// import {sample} from "ramda-extra"
// import {users} from "./users"
//
// console.log(users()) // => [{"id": 1, "name": "Kurtis Rainbolt-Greene"}, {"id": 2, "name": "Angela Englund"}]
//
// const game1Winner = sample(1, users())
// console.log(game1Winner) // => {"id": 2, "name": "Angela Englund"}
//
// const game2Winner = sample(1, users())
// console.log(game2Winner) // => {"id": 2, "name": "Angela Englund"}
//
// const game3Winner = sample(1, users())
// console.log(game3Winner) // => {"id": 1, "name": "Kurtis Rainbolt-Greene"}
// ```

import {take} from "ramda"
import {curryN} from "ramda"
import shuffle from "../shuffle"

export default curryN(2, function sample (size: number, list: Array<*>): Array<*> {
  return take(size, shuffle(list))
})
