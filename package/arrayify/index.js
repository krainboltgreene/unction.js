import isArray from "@unction/isarray"

export default function arrayify (value: any): [any] | Array<any> {
  if (isArray(value)) {
    return value
  }

  return [value]
}
