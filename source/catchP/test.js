import {describe, it} from "mocha"
import {expect} from "chai"

import catchP from "./"

describe("catchP()", () => {
  context("when given a rejecting promise", () => {
    const promise = Promise.reject(1)

    it("triggers the catch", () => {
      return catchP((value) => expect(value).to.equal(1), promise)
    })
  })
})
