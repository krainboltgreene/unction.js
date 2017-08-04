import isType from "@unction/istype"

export default function isArray (value: mixed): boolean {
  return isType("Array")(value)
}
