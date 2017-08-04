/* eslint-disable no-undefined */

export default function isType (signature: string): Function {
  return function isTypeSignature (value: mixed): boolean {
    if (signature === "null") {
      return value === null
    }

    if (signature === "undefined") {
      return value === undefined
    }

    if (value === undefined || value === null) {
      return false
    }

    return value.constructor.name === signature
  }
}
