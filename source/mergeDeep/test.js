import {test} from "tap"

import mergeDeep from "../mergeDeep"

test(({same, end}) => {
  same(
    mergeDeep({alpha: "1"}, {beta: "2"}),
    {
      alpha: "1",
      beta: "2",
    }
  )

  end()
})

test(({same, end}) => {
  same(
    mergeDeep({alpha: {alpha: "1"}}, {alpha: {beta: "2"}}),
    {
      alpha: {
        alpha: "1",
        beta: "2",
      }
    }
  )

  end()
})

test(({same, end}) => {
  same(
    mergeDeep({alpha: {alpha: "1"}}, {beta: {beta: "2"}}),
    {
      alpha: {alpha: "1"},
      beta: {beta: "2"}
    }
  )

  end()
})

test(({same, end}) => {
  same(
    mergeDeep({alpha: {alpha: "1"}}, {alpha: {alpha: "2"}}),
    {alpha: {alpha: "2"}}
  )

  end()
})

test(({same, end}) => {
  same(
    mergeDeep(["a"], ["b"]),
    [
      "a",
      "b",
    ]
  )

  end()
})

test(({same, end}) => {
  same(
    mergeDeep(["a"], ["a"]),
    [
      "a",
      "a",
    ]
  )

  end()
})

test(({same, end}) => {
  same(
    mergeDeep({alpha: ["a"]}, {alpha: ["a"]}),
    {
      alpha: [
        "a",
        "a",
      ]
    }
  )


  end()
})
