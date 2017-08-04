import isType from "@unction/istype"

export default function isObject (value: mixed): boolean {
  return isType("Object")(value)
}
