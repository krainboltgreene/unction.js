/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-magic-numbers */
import {test} from "tap"
import mapValues from "@unction/mapvalues"

import nestedApply from "./"

test(({similar, end}) => {
  similar(
    nestedApply(mapValues)((value) => `${value}`)(2)([[1]]),
    [["1"]]
  )

  end()
})

test(({similar, end}) => {
  similar(
    nestedApply(mapValues)((value) => `${value}`)(3)([[[1]]]),
    [[["1"]]]
  )

  end()
})
