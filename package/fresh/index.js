import type from "@unction/type"
import xstream from "xstream"

export default function fresh (iterable: IterableType): IterableType | null {
  switch (type(iterable)) {
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
    case "Stream": {
      return xstream.none()
    }
    default: {
      return null
    }
  }
}
