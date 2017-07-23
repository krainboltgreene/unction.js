/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-undefined, no-magic-numbers */
import {test} from "tap"

import isNil from "./"

test(({same, end}) => {
  same(
    isNil(null),
    true
  )

  end()
})

test(({same, end}) => {
  same(
    isNil(undefined),
    true
  )

  end()
})

test(({same, end}) => {
  same(
    isNil(0),
    false
  )

  end()
})

test(({same, end}) => {
  same(
    isNil([]),
    false
  )

  end()
})

test(({same, end}) => {
  same(
    isNil({}),
    false
  )

  end()
})

test(({same, end}) => {
  same(
    isNil(false),
    false
  )

  end()
})

test(({same, end}) => {
  same(
    isNil(true),
    false
  )

  end()
})

test(({same, end}) => {
  same(
    isNil("true"),
    false
  )

  end()
})

test(({same, end}) => {
  same(
    isNil(""),
    false
  )

  end()
})
