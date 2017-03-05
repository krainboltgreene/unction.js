import {notSame} from "tap"

import shuffle from "../shuffle"

notSame(
  shuffle(["1", "2", "3", "4", "5"]),
  ["1", "2", "3", "4", "5"]
)
