import {describe, it} from "mocha"
import {expect} from "chai"

import mapKeys from "./"

describe("mapKeys()", () => {
  const payload = {
    a1: "1",
    a2: "2"
  }
  const computer = (key) => key.replace(/a/, "")

  it("changes the keys", () => {
    expect(mapKeys(computer, payload)).to.deep.equal({
      1: "1",
      2: "2"
    })
  })
})
