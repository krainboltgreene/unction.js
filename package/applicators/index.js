import isArray from "@unction/isarray"
import isObject from "@unction/isobject"
import mapValues from "@unction/mapvalues"
import splat from "@unction/splat"
import applicator from "@unction/applicator"
import {equals} from "ramda"
import zip from "@unction/zip"

export default function applicators (unctions: Array<ValueType => any>): Function {
  const zipUnctions = zip(unctions)

  return function applicatorsUnctions (iterable: Array<ValueType>): Array<any> {
    if (isArray(iterable) && unctions.length !== iterable.length) {
      throw new Error("left and right werent the same size")
    }

    if (isObject(iterable) && !equals(Object.keys(unctions))(Object.keys(iterable))) {
      throw new Error("left and right had different keys")
    }

    return mapValues(splat(applicator))(zipUnctions(iterable))
  }
}
