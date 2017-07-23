/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-magic-numbers, id-length */
import {test} from "tap"

import recordfrom from "@unction/recordfrom"
import {inc} from "ramda"
import {dec} from "ramda"
import applicators from "./"

test(({same, end}) => {
  same(
    applicators([
      recordfrom(["point", "x"]),
      recordfrom(["point", "y"]),
      recordfrom(["point", "z"]),
    ])([
      40.453,
      2.2,
      423.0,
    ]),
    [
      {point: {x: 40.453}},
      {point: {y: 2.2}},
      {point: {z: 423.0}},
    ]
  )

  end()
})

test(({same, end}) => {
  same(
    applicators({
      x: inc,
      y: dec,
    })({
      x: -1,
      y: 1,
    }),
    {
      x: 0,
      y: 0,
    }
  )

  end()
})
