/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import fresh from "./"

test(({same, end}) => {
  same(
    fresh({aaa: "aaa"}),
    {}
  )

  end()
})

test(({same, end}) => {
  same(
    fresh(["a"]),
    []
  )

  end()
})

test(({same, end}) => {
  same(
    fresh("a"),
    ""
  )

  end()
})

test(({same, end}) => {
  same(
    fresh({}),
    {}
  )

  end()
})

test(({same, end}) => {
  same(
    fresh([]),
    []
  )

  end()
})

test(({same, end}) => {
  same(
    fresh(""),
    ""
  )

  end()
})
