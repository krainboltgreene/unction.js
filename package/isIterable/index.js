import isType from "@unction/istype"

export default function isIterable (value: any): boolean {
  return isType("Object")(value) || isType("Array")(value)
}
