import {describe, it} from "mocha"
import {expect} from "chai"

import thenP from "./"

describe("thenP()", () => {
  context("when given a resolving promise", () => {
    const promise = Promise.resolve(1)

    it("triggers the then", () => {
      return thenP((value) => expect(value).to.equal(1), promise)
    })
  })
})
