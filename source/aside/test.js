/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-magic-numbers */
import {test} from "tap"
import {spy} from "sinon"

import aside from "./"

test(({equal, end}) => {
  const unction = spy(() => "b")

  equal(aside([unction])("a"), "a")

  end()
})

test(({ok, end}) => {
  const unction = spy(() => "b")

  aside([unction])("a")

  ok(unction.calledWith("a"))

  end()
})

test(({equal, end}) => {
  const unction = spy(() => "b")

  equal(aside([unction])("a"), "a")

  end()
})

test(({ok, equal, end}) => {
  const unctionA = spy(() => "b")
  const unctionB = spy(() => "c")

  equal(aside([unctionA, unctionB])("a"), "a")

  ok(unctionA.calledWith("a"))
  ok(unctionB.calledWith("b"))

  end()
})
