import {describe, it} from "mocha"
import {expect} from "chai"

import thenCatchP from "./"

describe("thenCatchP()", () => {
  context("when given a resolving promise", () => {
    const promise = Promise.resolve(1)

    it("triggers a then, but not the catch", () => {
      return thenCatchP((value) => expect(value).to.equal(1), (value) => expect(value).to.not.equal(1), promise)
    })
  })

  context("when given a rejecting promise", () => {
    const promise = Promise.reject(1)

    it("triggers a catch, but not the then", () => {
      return thenCatchP((value) => expect(value).to.not.equal(1), (value) => expect(value).to.equal(1), promise)
    })
  })
})
