import isType from "@unction/istype"

export default function isArray (value: any): boolean {
  return isType("Array")(value)
}
