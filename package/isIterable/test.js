/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-magic-numbers, no-undefined */
import {test} from "tap"

import isIterable from "./"

test(({notOk, end}) => {
  notOk(isIterable(null))

  end()
})

test(({notOk, end}) => {
  notOk(isIterable(undefined))

  end()
})

test(({notOk, end}) => {
  notOk(isIterable("b"))

  end()
})

test(({ok, end}) => {
  ok(isIterable({}))

  end()
})

test(({ok, end}) => {
  ok(isIterable([]))

  end()
})

test(({notOk, end}) => {
  notOk(isIterable(1))

  end()
})

test(({notOk, end}) => {
  notOk(isIterable(new Buffer("x")))

  end()
})
