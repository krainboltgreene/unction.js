import {describe, describe as context, it} from "mocha"
import {expect} from "chai"

import compact from "../compact"

describe("compact()", () => {
  context("with a list", () => {
    const list = ["x", undefined, 1, null]

    it("returns a list without undefined or null", () => {
      expect(compact(list)).to.deep.equal(["x", 1])
    })
  })

  context("with an object", () => {
    const object = {valueA: 1, valueB: null, valueC: undefined}

    it("returns an object without the keys that have undefined or null valeus", () => {
      expect(compact(object)).to.deep.equal({valueA: 1})
    })
  })
})
