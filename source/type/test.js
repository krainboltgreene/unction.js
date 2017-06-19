/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-undefined, no-magic-numbers */
import {test} from "tap"

import type from "./"

test(({same, end}) => {
  same(
    type("a"),
    "String"
  )

  end()
})

test(({same, end}) => {
  same(
    type(1),
    "Number"
  )

  end()
})

test(({same, end}) => {
  same(
    type({}),
    "Object"
  )

  end()
})

test(({same, end}) => {
  same(
    type([]),
    "Array"
  )

  end()
})

test(({same, end}) => {
  same(
    type(true),
    "Boolean"
  )

  end()
})

test(({same, end}) => {
  same(
    type(false),
    "Boolean"
  )

  end()
})

test(({same, end}) => {
  same(
    type(null),
    "null"
  )

  end()
})

test(({same, end}) => {
  same(
    type(undefined),
    "undefined"
  )

  end()
})
