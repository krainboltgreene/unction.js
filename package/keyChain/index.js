import key from "@unction/key"
import reduceValues from "@unction/reducevalues"
import flip from "@unction/flip"

export default function keyChain (keychain: KeyChainType): Function {
  return function keyChainKeyChain (tree: TreeType): ValueType {
    return reduceValues(flip(key))(tree)(keychain)
  }
}
