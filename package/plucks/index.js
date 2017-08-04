import keyChain from "@unction/keychain"
import {juxt} from "ramda"
import mapValues from "@unction/mapvalues"

export default function plucks (keychains: Array<KeyChainType>): Function {
  return mapValues(juxt(mapValues(keyChain)(keychains)))
}
