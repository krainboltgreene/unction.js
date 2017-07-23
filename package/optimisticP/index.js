import mapValues from "@unction/mapvalues"
import recordfrom from "@unction/recordfrom"
import {pipe} from "ramda"
import key from "@unction/key"
import {has} from "ramda"
import {reject} from "ramda"
import thenCatchP from "@unction/thencatchp"
import thenP from "@unction/thenp"
import allP from "@unction/allp"

const asResolved = recordfrom(["resolved"])
const asRejected = recordfrom(["rejected"])
const onlyResolved = reject(has("rejected"))
const resolvedValues = mapValues(key("resolved"))
const onlyResolvedValues = pipe(onlyResolved, resolvedValues)

export default function optimisticP (promises: Array<any | Promise<any>>): Promise<Array<any>> {
  return promises
    | mapValues(thenCatchP(asResolved)(asRejected))
    | allP
    | thenP(onlyResolvedValues)
}
