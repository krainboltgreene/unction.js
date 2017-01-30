import {describe, it} from "mocha"
import {expect} from "chai"

import optimisticP from "./"

describe("optimisticP()", () => {
  context("when given two resolving promises", () => {
    const promiseA = Promise.resolve(1)
    const promiseB = Promise.resolve(2)

    it("returns both values", () => {
      return optimisticP([promiseA, promiseB])
        .then((value) => expect(value).to.deep.equal([1, 2]))
    })
  })

  context("when given one resolving promise and one rejecting promise", () => {
    const promiseA = Promise.resolve(1)
    const promiseB = Promise.reject(2)

    it("returns both values", () => {
      return optimisticP([promiseA, promiseB])
        .then((value) => expect(value).to.deep.equal([1]))
    })
  })

  context("when given two rejecting promises", () => {
    const promiseA = Promise.reject(1)
    const promiseB = Promise.reject(2)

    it("returns both values", () => {
      return optimisticP([promiseA, promiseB])
        .then((value) => expect(value).to.deep.equal([]))
    })
  })
})
