/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import shuffle from "./"

test(({notSame, end}) => {
  notSame(
    shuffle(["1", "2", "3", "4", "5"]),
    ["1", "2", "3", "4", "5"]
  )

  end()
})
