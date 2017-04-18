import {reduce} from "ramda"
import {flip} from "ramda"
import {reverse} from "ramda"
import {objOf} from "ramda"
import {isArrayLike} from "ramda"

export default function nestedObjOf (propOrPath: KeyType | Array<KeyType>): Function {
  const isPath = isArrayLike(propOrPath)
  const reversePath = reverse(propOrPath)

  return function nestedObjOfPropOrPath (value: any): IterableType {
    if (isPath) {
      return reduce(flip(objOf))(value)(reversePath)
    }

    return objOf(propOrPath)(value)
  }
}
