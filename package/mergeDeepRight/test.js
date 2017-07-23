/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import mergeDeepRight from "./"

test(({same, end}) => {
  same(
    mergeDeepRight({alpha: "1"})({beta: "2"}),
    {
      alpha: "1",
      beta: "2",
    }
  )

  end()
})

test(({same, end}) => {
  same(
    mergeDeepRight({gamma: {alpha: "1"}})({gamma: {beta: "2"}}),
    {
      gamma: {
        alpha: "1",
        beta: "2",
      }
    }
  )

  end()
})

test(({same, end}) => {
  same(
    mergeDeepRight({alpha: {alpha: "1"}})({beta: {beta: "2"}}),
    {
      alpha: {alpha: "1"},
      beta: {beta: "2"}
    }
  )

  end()
})

test(({same, end}) => {
  same(
    mergeDeepRight({alpha: {alpha: "1"}})({alpha: {alpha: "2"}}),
    {alpha: {alpha: "2"}}
  )

  end()
})

test(({same, end}) => {
  same(
    mergeDeepRight(["a"])(["b"]),
    [
      "a",
      "b",
    ]
  )

  end()
})

test(({same, end}) => {
  same(
    mergeDeepRight(["a"])(["a"]),
    [
      "a",
      "a",
    ]
  )

  end()
})

test(({same, end}) => {
  same(
    mergeDeepRight({alpha: ["a"]})({alpha: ["a"]}),
    {
      alpha: [
        "a",
        "a",
      ]
    }
  )

  end()
})
