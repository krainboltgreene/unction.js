/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-undefined */
import {test} from "tap"

import keyChain from "./"

test("With realized keychain", ({same, end}) => {
  same(
    keyChain(["aaa", "bbb", "ccc"])({aaa: {bbb: {ccc: "1"}}}),
    "1"
  )

  end()
})

test("With missing key", ({same, end}) => {
  same(
    keyChain(["aaa", "ddd", "ccc"])({aaa: {bbb: {ccc: "1"}}}),
    undefined
  )

  end()
})
