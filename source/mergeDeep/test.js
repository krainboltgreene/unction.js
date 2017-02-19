import {describe, describe as context, it} from "mocha"
import {expect} from "chai"

import mergeDeep from "./"

describe("mergeDeep()", () => {
  context("one level, simplistic type, different key", () => {
    const left = {
      alpha: "1"
    }
    const right = {
      beta: "2"
    }

    it("merges", () => {
      expect(mergeDeep(left, right)).to.deep.equal({
        alpha: "1",
        beta: "2"
      })
    })
  })

  context("two levels, simplistic type, different key, object value", () => {
    const left = {
      alpha: {
        alpha1: "1"
      }
    }
    const right = {
      beta: {
        beta1: "1"
      }
    }

    it("merges", () => {
      expect(mergeDeep(left, right)).to.deep.equal({
        alpha: {
          alpha1: "1"
        },
        beta: {
          beta1: "1"
        }
      })
    })
  })

  context("two levels, simplistic type, same root key, different sub key", () => {
    const left = {
      alpha: {
        alpha1: "1"
      }
    }
    const right = {
      alpha: {
        beta1: "1"
      }
    }

    it("merges", () => {
      expect(mergeDeep(left, right)).to.deep.equal({
        alpha: {
          alpha1: "1",
          beta1: "1"
        }
      })
    })
  })

  context("two levels, simplistic type, same root key, same subkey, conflicting value", () => {
    const left = {
      alpha: {
        alpha1: "1"
      }
    }
    const right = {
      alpha: {
        alpha1: "2"
      }
    }

    it("merges", () => {
      expect(mergeDeep(left, right)).to.deep.equal({
        alpha: {
          alpha1: "2"
        }
      })
    })
  })

  context("two levels, simplistic type, same key, array value different value", () => {
    const left = {
      alpha: [
        "1"
      ]
    }
    const right = {
      alpha: [
        "2"
      ]
    }

    it("merges", () => {
      expect(mergeDeep(left, right)).to.deep.equal({
        alpha: [
          "1",
          "2"
        ]
      })
    })
  })

  context("two levels, simplistic type, same key, array value same value", () => {
    const left = {
      alpha: [
        "1"
      ]
    }
    const right = {
      alpha: [
        "1"
      ]
    }

    it("merges", () => {
      expect(mergeDeep(left, right)).to.deep.equal({
        alpha: [
          "1",
          "1"
        ]
      })
    })
  })
})
