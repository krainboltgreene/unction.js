import {describe, it} from "mocha"
import {expect} from "chai"

import appendM from "./"

describe("appendM()", () => {
  it("adds to the end of the list", () => {
    const list = []
    const value = 1

    expect(appendM(value, list)).to.deep.equal([1])
  })
})
