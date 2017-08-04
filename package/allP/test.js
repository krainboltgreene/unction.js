/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import allP from "./"

test(({same}) => {
  return allP([
    Promise.resolve("aa"),
    Promise.resolve("bb"),
  ])
    .then((resolution) => same(
      resolution, [
        "aa",
        "bb"
      ]))
})
