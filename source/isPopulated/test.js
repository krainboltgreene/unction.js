import {test} from "tap"

import isPopulated from "./"

test(({equal, end}) => {
  equal(isPopulated(["a"]), true)

  end()
})

test(({equal, end}) => {
  equal(isPopulated([[]]), true)

  end()
})

test(({equal, end}) => {
  equal(isPopulated([{}]), true)

  end()
})

test(({equal, end}) => {
  equal(isPopulated([]), false)

  end()
})

test(({equal, end}) => {
  equal(isPopulated([undefined]), false)

  end()
})

test(({equal, end}) => {
  equal(isPopulated([undefined]), false)

  end()
})

test(({equal, end}) => {
  equal(isPopulated([null]), false)

  end()
})
