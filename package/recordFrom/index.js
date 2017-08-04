import reduceValues from "@unction/reducevalues"
import attach from "@unction/attach"
import {reverse} from "ramda"

export default function recordFrom (keychain: KeyChainType): Function {
  const reverseKeychain = reverse(keychain)

  return function recordFromKeychain (value: any): IterableType {
    return reduceValues(
      (accumulated: RecordType): Function => (key: KeyType): RecordType => attach(key)(accumulated)({})
    )(
      value
    )(
      reverseKeychain
    )
  }
}
