import isType from "@unction/istype"

export default function isNil (value: ValueType): boolean {
  return isType("undefined")(value) || isType("null")(value)
}
