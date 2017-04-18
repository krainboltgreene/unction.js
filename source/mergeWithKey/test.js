/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import mergeWith from "./"

test(({same, end}) => {
  same(
    mergeWith((key) => (left) => (right) => key + right + left)({beta: "a"})({beta: "b"}),
    {beta: "betaba"}
  )

  end()
})

test(({same, end}) => {
  same(
    mergeWith((key) => (left) => (right) => key + right + left)({alpha: "a"})({beta: "b"}),
    {
      alpha: "a",
      beta: "b"
    }
  )

  end()
})
