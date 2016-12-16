import {describe, it} from "mocha"
import {expect} from "chai"
import {range} from "ramda"
import {map} from "ramda"

import shuffle from "../shuffle"

describe("shuffle()", () => {
  const list = [1, 2, 3, 4, 5]

  it("randomizes the contents", () => {
    expect(map(() => shuffle(list), range(1, 100))).to.not.deep.equal(map(() => list, range(1, 100)))
  })
})
