import isType from "@unction/istype"

export default function isObject (value: any): boolean {
  return isType("Object")(value)
}
