import mergeDeepRight from "ramda-mergeDeepRight"
import nestedObjOf from "ramda-nestedObjOf"

export default function computedProp (computer: IterableType => any): Function {
  return function computedPropComputer (propOrPath: KeyType | Array<KeyType>): Function {
    const receiver = nestedObjOf(propOrPath)

    return function computedPropComputerPropOrPath (iterable: IterableType): IterableType {
      return mergeDeepRight(iterable)(receiver(computer(iterable)))
    }
  }
}
