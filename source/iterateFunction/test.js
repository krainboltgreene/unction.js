/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import iterateFunction from "./"

test(({same, end}) => {
  same(
    iterateFunction(["a", "b", "c"])((value, key) => [value, key]),
    ["a", "b", "c"].forEach((value, key) => [value, key])
  )

  end()
})

test(({same, end}) => {
  same(
    iterateFunction({
      aaa: 1,
      bbb: 2,
      ccc: 2
    })((value, key) => [value, key]),
    Object.entries({
      aaa: 1,
      bbb: 2,
      ccc: 2
    }).forEach((value, key) => [value, key])
  )

  end()
})

test(({same, end}) => {
  same(
    iterateFunction(new Map([
      ["a", "b"],
      ["c", "d"]
    ]))((value, key) => [value, key]),
    new Map([
      ["a", "b"],
      ["c", "d"]
    ]).forEach((value, key) => [value, key])
  )

  end()
})
