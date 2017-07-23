type ValueType = any
type KeyType = any
type ListType = Array<ValueType>
type RecordType = {[key: KeyType]: ValueType}
type IterableType = [] | {} | ListType | RecordType
type TreeType = {[key: KeyType]: ValueType | IterableType | TreeType}
type KeyChainType = Array<KeyType>
type UnfinishedKeyChainType = Array<KeyType | null>
type NestedIterableType = Array<ValueType | IterableType | TreeType> | TreeType
type PredicateType = any => boolean
type ResolvedPromisesType = Array<any>
type RejectedPromisesType = Array<any>
