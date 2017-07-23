/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-magic-numbers, no-undefined */
import {test} from "tap"

import isArray from "./"

test(({notOk, end}) => {
  notOk(isArray(null))

  end()
})

test(({notOk, end}) => {
  notOk(isArray(undefined))

  end()
})

test(({notOk, end}) => {
  notOk(isArray("b"))

  end()
})

test(({notOk, end}) => {
  notOk(isArray({}))

  end()
})

test(({ok, end}) => {
  ok(isArray([]))

  end()
})

test(({notOk, end}) => {
  notOk(isArray(1))

  end()
})

test(({notOk, end}) => {
  notOk(isArray(new Buffer("x")))

  end()
})
