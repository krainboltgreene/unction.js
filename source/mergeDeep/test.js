import {same} from "tap"

import mergeDeep from "../mergeDeep"

same(
  mergeDeep({alpha: "1"}, {beta: "2"}),
  {
    alpha: "1",
    beta: "2",
  }
)
same(
  mergeDeep({alpha: {alpha: "1"}}, {alpha: {beta: "2"}}),
  {
    alpha: {
      alpha: "1",
      beta: "2",
    }
  }
)
same(
  mergeDeep({alpha: {alpha: "1"}}, {beta: {beta: "2"}}),
  {
    alpha: {alpha: "1"},
    beta: {beta: "2"}
  }
)
same(
  mergeDeep({alpha: {alpha: "1"}}, {alpha: {alpha: "2"}}),
  {alpha: {alpha: "2"}}
)
same(
  mergeDeep(["a"], ["b"]),
  [
    "a",
    "b",
  ]
)
same(
  mergeDeep(["a"], ["a"]),
  [
    "a",
    "a",
  ]
)
same(
  mergeDeep({alpha: ["a"]}, {alpha: ["a"]}),
  {
    alpha: [
      "a",
      "a",
    ]
  }
)
