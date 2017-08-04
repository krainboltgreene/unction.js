import isType from "@unction/istype"

export default function isNil (value: mixed): boolean {
  return isType("undefined")(value) || isType("null")(value)
}
