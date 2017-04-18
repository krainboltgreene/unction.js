import {toPairs} from "ramda"
import {zipObj} from "ramda"
import allP from "ramda-allP"
import pairsKeys from "ramda-pairsKeys"
import pairsValues from "ramda-pairsValues"


export default function allObjectP (object: {[key: KeyType]: any | Promise<any>}): Promise<{[key: KeyType]: any}> {
  const pairs = toPairs(object)

  return allP(pairsValues(pairs))
    .then(function rezip (resolves: Array<Promise<any>>): {[key: mixed]: any} {
      return zipObj(pairsKeys(pairs))(resolves)
    })
}
