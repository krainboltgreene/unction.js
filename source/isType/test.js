/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-magic-numbers */
import {test} from "tap"

import isType from "./"

test("null", ({same, end}) => {
  same(isType("null")(null), true)

  end()
})

test("undefined", ({same, end}) => {
  same(isType("undefined")(undefined), true)

  end()
})

test("null wrong", ({same, end}) => {
  same(isType("String")(null), false)

  end()
})

test("undefined wrong", ({same, end}) => {
  same(isType("String")(undefined), false)

  end()
})

test(({same, end}) => {
  same(isType("String")("b"), true)

  end()
})

test(({same, end}) => {
  same(isType("String")("b"), true)

  end()
})

test("object", ({same, end}) => {
  same(isType("Object")({}), true)

  end()
})

test("array", ({same, end}) => {
  same(isType("Array")([]), true)

  end()
})

test("number", ({same, end}) => {
  same(isType("Number")(1), true)

  end()
})

test("buffer", ({same, end}) => {
  same(isType("Buffer")(new Buffer("x")), true)

  end()
})
