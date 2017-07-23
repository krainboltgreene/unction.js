import keyChain from "@unction/keychain"
import mapValues from "@unction/mapvalues"

export default function pluck (keychain: KeyChainType): Function {
  return function pluckKeychain (iterable: IterableType): IterableType {
    return mapValues(keyChain(keychain))(iterable)
  }
}
