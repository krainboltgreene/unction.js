/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, prefer-promise-reject-errors */
import {test} from "tap"

import everyP from "./"

test(({same}) => {
  return everyP([
    Promise.reject("a"),
    Promise.resolve("b"),
    Promise.reject("c"),
    Promise.resolve("d"),
  ])
    .then((resolution) => same(
      resolution,
      [
        [
          "b",
          "d"
        ],
        [
          "a",
          "c"
        ]
      ]
    ))
})
