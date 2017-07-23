/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-magic-numbers */
import {test} from "tap"
import {range} from "ramda"
import {contains} from "ramda"

import sample from "./"

test(({ok, end}) => {
  ok(contains(sample(range(1, 100)))(range(1, 100)))
  end()
})
