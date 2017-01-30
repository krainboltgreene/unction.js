import {describe, it} from "mocha"
import {expect} from "chai"

import resolveP from "./"

describe("resolveP()", () => {
  it("triggeres a then", () => {
    return resolveP(1)
      .then((value) => expect(value).to.equal(1))
  })
})
