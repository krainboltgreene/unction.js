/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import mergeRight from "./"

test(({same, end}) => {
  const left = {
    alpha: "1",
    beta: "1",
  }
  const right = {
    beta: "2",
    zeta: "3",
  }

  same(
    mergeRight(left)(right),
    {
      alpha: "1",
      beta: "2",
      zeta: "3",
    }
  )

  end()
})

test(({same, end}) => {
  const left = [
    "a",
    "b",
  ]
  const right = [
    "c",
  ]

  same(
    mergeRight(left)(right),
    [
      "a",
      "b",
      "c",
    ]
  )

  end()
})
