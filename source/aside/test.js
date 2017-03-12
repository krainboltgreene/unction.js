import {test} from "tap"
import {spy} from "sinon"

import aside from "./"

test(({equal, end}) => {
  const unctions = spy((): string => "b")

  equal(aside(unctions)("a"), "a")

  end()
})

test(({ok, end}) => {
  const unctions = spy((): string => "b")

  aside(unctions)("a")

  ok(unctions.calledWith("a"))

  end()
})

test(({equal, end}) => {
  const unctions = spy((): string => "b")

  equal(aside(unctions, unctions)("a"), "a")

  end()
})

test(({ok, end}) => {
  const unctions = spy((): string => "b")

  aside(unctions, unctions)("a")

  ok(unctions.calledWith("b"))

  end()
})
