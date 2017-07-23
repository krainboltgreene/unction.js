import reduceValues from "@unction/reducevalues"
import replaceWhen from "@unction/replacewhen"
import isNil from "@unction/isnil"
import keyChain from "@unction/keychain"

export default function cascadingKeyChain (keychains: Array<UnfinishedKeyChainType>): Function {
  return function cascadingKeyChainChains (tree: IterableType): ValueType {
    return reduceValues(
      (filler: ValueType | null): Function => (keychain: KeyChainType): ValueType => {
        if (isNil(filler)) {
          return keyChain(keychain)(tree)
        }

        return keyChain(replaceWhen(isNil)(filler)(keychain))(tree)
      }
    )(
      null
    )(
      keychains
    )
  }
}
