/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-undefined, no-magic-numbers */
import {test} from "tap"

import isPresent from "./"

test("array", ({equal, end}) => {
  equal(isPresent([]), true)

  end()
})

test("object", ({equal, end}) => {
  equal(isPresent({}), true)

  end()
})

test("string", ({equal, end}) => {
  equal(isPresent(""), true)

  end()
})

test("zero", ({equal, end}) => {
  equal(isPresent(0), true)

  end()
})

test("true", ({equal, end}) => {
  equal(isPresent(true), true)

  end()
})

test("false", ({equal, end}) => {
  equal(isPresent(false), true)

  end()
})

test("null", ({equal, end}) => {
  equal(isPresent(null), false)

  end()
})


test("undefined", ({equal, end}) => {
  equal(isPresent(undefined), false)

  end()
})
