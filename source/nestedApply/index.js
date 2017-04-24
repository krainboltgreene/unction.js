import reduce from "@unction/reduce"
import upTo from "@unction/upto"

export default function nestedApply (iterator: Function => IterableType => IterableType): Function {
  return function nestedApplyIterator (unction: any => any): IterableType => IterableType {
    const initial = iterator(unction)

    return function nestedApplyIteratorUnction (depth: number): any {
      const times = upTo(depth)

      return function nestedApplyIteratorUnctionDepth (iterable: IterableType): IterableType {
        return reduce(
          function nestedApplyIteratorUnctionDepthIterable (accumulatedUnction: Function): Function {
            return function nestedApplyIteratorUnctionDepthIterableAccumulatedUnction (): IterableType => IterableType {
              return iterator(accumulatedUnction)
            }
          }
        )(
          initial
        )(
          times
        )(
          iterable
        )
      }
    }
  }
}
