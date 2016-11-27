import {describe, it} from "mocha"
import {expect} from "chai"
import {spy} from "sinon"

import aside from "./"

describe("aside()", () => {
  context("when given a function", () => {
    const ƒunction = spy((value) => value + 1)
    const original = 1

    it("returns the original value", () => {
      expect(aside(ƒunction)(original)).to.equal(original)
    })

    it("evokes the function", () => {
      expect(ƒunction.calledWith(original)).to.equal(true)
    })
  })
  context("when given functions", () => {
    const ƒunctionA = spy((value) => value + 1)
    const ƒunctionB = spy((value) => value + 1)
    const original = 1

    it("returns the original value", () => {
      expect(aside(ƒunctionA, ƒunctionB)(original)).to.equal(original)
    })

    it("evokes functionA", () => {
      expect(ƒunctionA.calledWith(original)).to.equal(true)
    })

    it("evokes functionB with the return value of functionB", () => {
      expect(ƒunctionB.calledWith(original + 1)).to.equal(true)
    })
  })
})
