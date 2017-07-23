import mergeDeepRight from "@unction/mergedeepright"
import recordfrom from "@unction/recordfrom"

export default function computedProp (computer: IterableType => any): Function {
  return function computedPropComputer (propOrPath: KeyType | Array<KeyType>): Function {
    const receiver = recordfrom(keychain)

    return function computedPropComputerPropOrPath (iterable: IterableType): IterableType {
      return mergeDeepRight(iterable)(receiver(computer(iterable)))
    }
  }
}
