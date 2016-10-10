import {describe, it} from "mocha"
import {expect} from "chai"

import nestedObjOf from "./"

describe("nestedObjOf()", () => {
  context("when given a single-part key", () => {
    const path = ["key"]
    const value = "value"

    it("returns the object with the key:value", () => {
      expect(nestedObjOf(path, value)).to.have.deep.equal({key: "value"})
    })
  })

  context("when given a multi-part path", () => {
    const path = ["key", "subkey"]
    const value = "value"

    it("returns the object with the key->subkey:value", () => {
      expect(nestedObjOf(path, value)).to.have.deep.equal({key: {subkey: "value"}})
    })
  })
})
