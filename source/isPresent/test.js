import {describe, it} from "mocha"
import {expect} from "chai"

import isPresent from "./"

describe("isPresent()", () => {
  context("when value is null", () => {
    const value = null

    it("returns false", () => {
      expect(isPresent(value)).to.be.notOk
    })
  })

  context("when value is undefined", () => {
    const value = undefined

    it("returns false", () => {
      expect(isPresent(value)).to.be.notOk
    })
  })

  context("when value is anything else", () => {
    const value = 1

    it("returns true", () => {
      expect(isPresent(value)).to.be.ok
    })
  })
})
