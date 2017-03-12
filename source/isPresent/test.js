/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import isPresent from "./"

test(({equal, end}) => {
  equal(isPresent(true), true)

  end()
})

test(({equal, end}) => {
  equal(isPresent([]), true)

  end()
})

test(({equal, end}) => {
  equal(isPresent({}), true)

  end()
})

test(({equal, end}) => {
  equal(isPresent(""), true)

  end()
})

test(({equal, end}) => {
  equal(isPresent(0), true)

  end()
})

test(({equal, end}) => {
  equal(isPresent(null), false)

  end()
})

test(({equal, end}) => {
  equal(isPresent(false), true)

  end()
})


test(({equal, end}) => {
  equal(isPresent(undefined), false)

  end()
})
