/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-magic-numbers */
import {test} from "tap"
import {range} from "ramda"
import {intersection} from "ramda"

import sampleSize from "./"

test(({includes, end}) => {
  includes(intersection(sampleSize(1, range(1, 100)), range(1, 100)), [])
  end()
})
