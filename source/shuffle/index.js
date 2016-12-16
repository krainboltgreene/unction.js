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
