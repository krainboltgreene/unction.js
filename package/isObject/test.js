/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-magic-numbers, no-undefined */
import {test} from "tap"

import isObject from "./"

test(({notOk, end}) => {
  notOk(isObject(null))

  end()
})

test(({notOk, end}) => {
  notOk(isObject(undefined))

  end()
})

test(({notOk, end}) => {
  notOk(isObject("b"))

  end()
})

test(({ok, end}) => {
  ok(isObject({}))

  end()
})

test(({notOk, end}) => {
  notOk(isObject([]))

  end()
})

test(({notOk, end}) => {
  notOk(isObject(1))

  end()
})

test(({notOk, end}) => {
  notOk(isObject(new Buffer("x")))

  end()
})
