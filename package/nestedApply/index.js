import reduceValues from "@unction/reducevalues"
import upTo from "@unction/upto"
import isPopulated from "@unction/ispopulated"

export default function nestedApply (iterator: (any => any) => IterableType => IterableType): Function {
  return function nestedApplyIterator (unction: any => any): Function {
    const initial = iterator(unction)

    return function nestedApplyIteratorUnction (depth: number): Function {
      const times = upTo(depth)

      if (isPopulated) {
        return reduceValues(
          function nestedApplyIteratorUnctionDepthIterable (accumulatedUnction: Function): Function {
            return function nestedApplyIteratorUnctionDepthIterableAccumulatedUnction (): IterableType => IterableType {
              return iterator(accumulatedUnction)
            }
          }
        )(
          initial
        )(
          times
        )
      }

      return unction
    }
  }
}
