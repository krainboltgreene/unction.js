import {describe, it} from "mocha"
import {expect} from "chai"

import hammer from "./"

describe("hammer()", () => {
  const payload = {
    id: "1",
    attributes: {
      name: "Kurtis Rainbolt-Greene"
    }
  }

  it("doesn't include the given property", () => {
    expect(hammer("attributes", payload)).to.not.have.deep.property("attributes")
  })

  it("includes the properties of the given property at the top level", () => {
    expect(hammer("attributes", payload)).to.have.deep.property("name")
  })

  it("includes the previous attributes in the top level still", () => {
    expect(hammer("attributes", payload)).to.have.deep.property("id")
  })
})
