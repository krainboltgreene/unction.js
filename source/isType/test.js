/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-magic-numbers, no-undefined */
import {test} from "tap"

import isType from "./"

test(({ok, end}) => {
  ok(isType("null")(null))

  end()
})

test(({ok, end}) => {
  ok(isType("undefined")(undefined))

  end()
})

test(({notOk, end}) => {
  notOk(isType("String")(null))

  end()
})

test(({notOk, end}) => {
  notOk(isType("String")(undefined))

  end()
})

test(({ok, end}) => {
  ok(isType("String")("b"))

  end()
})

test(({ok, end}) => {
  ok(isType("String")(""))

  end()
})

test(({ok, end}) => {
  ok(isType("Object")({}))

  end()
})

test(({ok, end}) => {
  ok(isType("Array")([]))

  end()
})

test(({ok, end}) => {
  ok(isType("Number")(1))

  end()
})

test(({ok, end}) => {
  ok(isType("Buffer")(new Buffer("x")))

  end()
})
