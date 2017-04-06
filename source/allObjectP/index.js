// ? ({[key: mixed]: Promise<mixed> | mixed}) => Promise<{[key: mixed]: mixed}>
// ? Map with mixed keys and Promise mixed values -> Promise of Map with mixed keys and mixed values

import {toPairs} from "ramda"
import {zipObj} from "ramda"
import allP from "../allP"
import pairsKeys from "../pairsKeys"
import pairsValues from "../pairsValues"


export default function allObjectP (object: {[key: mixed]: Promise<mixed> | mixed}): Promise<{[key: mixed]: mixed}> {
  const pairs = toPairs(object)

  return allP(pairsValues(pairs))
    .then(function rezip (resolves: Array<Promise<mixed>>): {[key: mixed]: mixed} {
      return zipObj(pairsKeys(pairs))(resolves)
    })
}
