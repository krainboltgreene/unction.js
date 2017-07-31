import type from "@unction/type"

export default function fresh (value: mixed): mixed | null {
  switch (type(value)) {
    case "String": {
      return ""
    }
    case "Array": {
      return []
    }
    case "Object": {
      return {}
    }
    case "Map": {
      return new Map()
    }
    case "WeakMap": {
      return new WeakMap()
    }
    case "Set": {
      return new Set()
    }
    case "WeakSet": {
      return new WeakSet()
    }
    default: {
      return null
    }
  }
}
