import {describe, it} from "mocha"
import {expect} from "chai"
import {range} from "ramda"
import {map} from "ramda"
import {uniq} from "ramda"
import {flatten} from "ramda"

import sample from "../sample"

describe("sample()", () => {
  const list = [1, 2, 3]

  it("randomizes the contents", () => {
    expect(uniq(flatten(map(() => sample(1, list), range(1, 100))))).to.include(...list)
  })
})
