/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-magic-numbers */
import {test} from "tap"

import ifThenElse from "./"

const toFloat = (value) => parseFloat(value)
const toString = (value) => `${value}`
const isEven = (value) => value % 2 === 0

test(({same, end}) => {
  same(
    ifThenElse(isEven)(toString)(toFloat)(1),
    1.0
  )

  end()
})

test(({same, end}) => {
  same(
    ifThenElse(isEven)(toString)(toFloat)(2),
    "2"
  )

  end()
})
