/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import mergeLeft from "./"

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
    mergeLeft(left)(right),
    {
      alpha: "1",
      beta: "1",
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
    mergeLeft(left)(right),
    [
      "c",
      "a",
      "b",
    ]
  )

  end()
})
