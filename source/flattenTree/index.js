import reduceWithValueKey from "@unction/reducewithvaluekey"
import reduceValues from "@unction/reducevalues"
import isType from "@unction/istype"
import mapValues from "@unction/mapvalues"
import prepend from "@unction/prepend"
import append from "@unction/append"
import mergeRight from "@unction/mergeright"
import {join} from "ramda"

export default function flattenTree (delimiter: string): Function {
  return function flattenTreeDelimiter (iterable: object): object {
    return reduceValues(
      (accumulated: AccumulatedType): Function => ([keys, value]: Array<ValueType>): object => mergeRight(accumulated)({[join(delimiter)(keys)]: value})
    )(
      {}
    )(
      (
        function flattenTreeDelimiterMapping (nested: object): object {
          return reduceWithValueKey(
            (accumulated: AccumulatedType): Function => (treeOrLeaf: ValueType): Function => (key: string): AccumulatedType => {
              if (isType("Object")(treeOrLeaf)) {
                return mergeRight(
                  accumulated
                )(
                  mapValues(
                    ([keys, leaf]: [Array<KeyType>, ValueType]): [Array<KeyType>, ValueType] => append(leaf)([prepend(key)(keys)])
                  )(
                    flattenTreeDelimiterMapping(treeOrLeaf)
                  )
                )
              }

              return prepend([[key], treeOrLeaf])(accumulated)
            }
          )(
            []
          )(
            nested
          )
        }
      )(
        iterable
      )
    )
  }
}
