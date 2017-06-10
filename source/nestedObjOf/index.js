import reduceValues from "@unction/reducevalues"
import {flip} from "ramda"
import {reverse} from "ramda"
import {objOf} from "ramda"
import isArray from "@unction/isarray"

export default function nestedObjOf (propOrPath: KeyType | Array<KeyType>): Function {
  const isPath = isArray(propOrPath)
  const reversePath = reverse(propOrPath)

  return function nestedObjOfPropOrPath (value: any): IterableType {
    if (isPath) {
      return reduceValues(flip(objOf))(value)(reversePath)
    }

    return objOf(propOrPath)(value)
  }
}
