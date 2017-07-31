type ValueType = mixed
type KeyType = mixed
type ListType = Array<ValueType> | Set<ValueType> | WeakSet<ValueType>
type RecordType = {[key: KeyType]: ValueType} | Map<KeyType, ValueType> | WeakMap<KeyType, ValueType>
type IterableType = ListType | RecordType
type RecordTreeType = {[key: KeyType]: ValueType | IterableType }
type ListTreeType = Array<ValueType | IterableType>
type TreeType = ListTreeType | RecordTreeType
type KeyChainType = Array<KeyType>
type UnfinishedKeyChainType = Array<KeyType | null>
type NestedIterableType = ListTreeType | RecordTreeType
type PredicateType = any => boolean
type ResolvedPromisesType = ListType
type RejectedPromisesType = ListType
