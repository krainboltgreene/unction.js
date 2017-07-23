/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-undefined, no-magic-numbers */
import {test} from "tap"

import key from "./"

test(({same, end}) => {
  same(
    key("aaa")({aaa: "1"}),
    "1"
  )

  end()
})

test(({same, end}) => {
  same(
    key("bbb")({aaa: "1"}),
    undefined
  )

  end()
})

test(({same, end}) => {
  same(
    key("bbb")(undefined),
    undefined
  )

  end()
})

test(({same, end}) => {
  same(
    key(0)(["aaa"]),
    "aaa"
  )

  end()
})
