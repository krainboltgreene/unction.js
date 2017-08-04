/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import reduceWithValueKey from "./"

test(({equal, end}) => {
  equal(
    reduceWithValueKey((accumulation) => (current) => (key) => `${accumulation}/${current}:${key}`)(".")(["a", "b", "c"]),
    "./a:0/b:1/c:2"
  )

  end()
})

test(({equal, end}) => {
  equal(
    reduceWithValueKey((accumulation) => (current) => (key) => `${accumulation}/${current}:${key}`)(".")({
      aaa: "a",
      bbb: "b",
      ccc: "c",
    }),
    "./a:aaa/b:bbb/c:ccc"
  )

  end()
})
