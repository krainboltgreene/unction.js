import {describe, it} from "mocha"
import {expect} from "chai"

import isPopulated from "./"

describe("isPopulated()", () => {
  context("when value is empty", () => {
    const value = []

    it("returns false", () => {
      expect(isPopulated(value)).to.be.notOk
    })
  })


  context("when value has a item", () => {
    const value = [1]

    it("returns true", () => {
      expect(isPopulated(value)).to.be.ok
    })
  })
})
