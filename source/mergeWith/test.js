/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import mergeWith from "./"

test(({same, end}) => {
  same(
    mergeWith((left) => (right) => right + left)({beta: "a"})({beta: "b"}),
    {beta: "ba"}
  )

  end()
})

test(({same, end}) => {
  same(
    mergeWith((left) => (right) => left + right)({
      alpha: "0",
      beta: "1",
      zeta: "3",
    })({
      alpha: "0",
      beta: "2",
      zeta: "3",
    }),
    {
      alpha: "0",
      beta: "12",
      zeta: "3",
    }
  )

  end()
})
