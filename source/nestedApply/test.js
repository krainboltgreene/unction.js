/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-magic-numbers */
import {test} from "tap"
import map from "@unction/map"

import nestedApply from "./"

test(({similar, end}) => {
  similar(
    nestedApply(map)((value) => `${value}`)(2)([[1]]),
    [["1"]]
  )

  end()
})

test(({similar, end}) => {
  similar(
    nestedApply(map)((value) => `${value}`)(3)([[[1]]]),
    [[["1"]]]
  )

  end()
})
