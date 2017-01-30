import {describe, it} from "mocha"
import {expect} from "chai"

import rejectP from "./"

describe("rejectP()", () => {
  it("triggeres a catch", () => {
    return rejectP(1)
      .catch((value) => expect(value).to.equal(1))
  })
})
