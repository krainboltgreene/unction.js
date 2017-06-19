/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-magic-numbers */
import {test} from "tap"

import splat from "./"

test(({same, end}) => {
  same(
    splat((left) => left + 1)([1]),
    2
  )

  end()
})

test(({same, end}) => {
  same(
    splat((left) => (right) => left + right)([1, 2]),
    3
  )

  end()
})


test(({same, end}) => {
  same(
    splat((left) => (right) => (final) => left + right - final)([1, 2, 3]),
    0
  )

  end()
})
