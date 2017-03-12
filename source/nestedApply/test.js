/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"
import {map} from "ramda"
import {toUpper} from "ramda"
import {unary} from "ramda"

import nestedApply from "./"

test(({similar, end}) => {
  similar(nestedApply(unary(map))(toUpper)(2)([["a"]]), [["A"]])

  end()
})

test(({similar, end}) => {
  similar(nestedApply(unary(map))(toUpper)(3)([[["a"]]]), [[["A"]]])

  end()
})
