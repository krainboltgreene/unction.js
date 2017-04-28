import reduceValues from "@unction/reducevalues"
import mapValues from "@unction/mapvalues"
import mapWithValueKey from "@unction/mapwithvaluekey"
import nestedApply from "@unction/nestedapply"

export default function treeify (iterators: Array<Function>): Function {
  return function treeifyIterators (collection: Array<IterableType>): IterableType {
    return reduceValues(
      function treeifyIteratorsCollectionReducer (iterable: IterableType): Function {
        return function treeifyIteratorsCollectionReducerIterable (transformation: IterableType => IterableType): IterableType {
          return transformation(iterable)
        }
      }
    )(
      collection
    )(
      mapWithValueKey(
        function treeifyIteratorsCollectionMapper (unction: any => any): Function {
          return function treeifyIteratorsCollectionMapperIterable (index: number): IteratorType {
            return nestedApply(mapValues)(unction)(index)(iterators)
          }
        }
      )(
        iterators
      )
    )
  }
}
