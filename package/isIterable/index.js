import isType from "@unction/istype"

export default function isIterable (value: mixed): boolean {
  return isType("Object")(value) || isType("Array")(value) || isType("Map")(value) || isType("WeakMap")(value) || isType("Set")(value) || isType("WeakSet")(value) || isType("Stream")(value) || isType("String")(value) || isType("Buffer")(value)
}
