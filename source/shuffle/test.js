import {test} from "tap"

import shuffle from "../shuffle"

test(({notSame, end}) => {
  notSame(
    shuffle(["1", "2", "3", "4", "5"]),
    ["1", "2", "3", "4", "5"]
  )

  end()
})
