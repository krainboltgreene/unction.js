import thrush from "@unction/thrush"
import reduceValues from "@unction/reducevalues"
import mapValues from "@unction/mapvalues"
import mapWithValueKey from "@unction/mapwithvaluekey"
import nestedApply from "@unction/nestedapply"

export default function treeify (folders: Array<(any => IterableType => IterableType)>): Function {
  const [initial, ...remaining] = folders

  return function treeifyIterators (records: Array<IterableType>): IterableType {
    return reduceValues(
      thrush
    )(
      initial(records)
    )(
      mapWithValueKey(
        nestedApply(mapValues)
      )(
        remaining
      )
    )
  }
}
