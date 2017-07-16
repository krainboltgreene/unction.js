import mergeDeepRight from "@unction/mergedeepright"
import nestedObjOf from "@unction/nestedobjof"

export default function computedProp (computer: IterableType => any): Function {
  return function computedPropComputer (propOrPath: KeyType | Array<KeyType>): Function {
    const receiver = nestedObjOf(propOrPath)

    return function computedPropComputerPropOrPath (iterable: IterableType): IterableType {
      return mergeDeepRight(iterable)(receiver(computer(iterable)))
    }
  }
}
