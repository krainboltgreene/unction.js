import {describe, it} from "mocha"
import {expect} from "chai"

import computedProp from "./"

describe("computedProp()", () => {
  context("when given a computer, single part key, and structure", () => {
    const payload = {
      id: "1",
      attributes: {
        username: "krainboltgreene"
      }
    }
    const key = "tag"
    const computer = ({id, attributes: {username}}) => `${username}#${id}`

    it("returns the computed value", () => {
      expect(computedProp(computer, key, payload)).to.have.deep.property("tag", "krainboltgreene#1")
    })
  })

  context("when given a computer, multi-part key, and structure", () => {
    const payload = {
      id: "1",
      attributes: {
        username: "krainboltgreene"
      }
    }
    const key = ["attributes", "tag"]
    const computer = ({id, attributes: {username}}) => `${username}#${id}`

    it("returns the computed value", () => {
      expect(computedProp(computer, key, payload)).to.have.deep.property("attributes.tag", "krainboltgreene#1")
    })
  })
})
