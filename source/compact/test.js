import {test} from "tap"

import compact from "../compact"

test(({same, end}) => {
  same(compact({valueA: 1, valueB: undefined, valueC: null, valueD: []}), {valueA: 1, valueD: []})

  end()
})

test(({same, end}) => {
  same(compact(["x", undefined, [], 1, null]), ["x", [], 1])

  end()
})
