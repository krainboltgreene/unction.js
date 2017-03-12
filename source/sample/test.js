import {test} from "tap"
import {range} from "ramda"
import {intersection} from "ramda"

import sample from "../sample"

test(({includes, end}) => {
  includes(intersection(sample(1, range(1, 100)), range(1, 100)), [])
  end()
})
