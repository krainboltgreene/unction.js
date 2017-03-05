import {same} from "tap"

import compact from "../compact"

same(compact(["x", undefined, [], 1, null]), ["x", [], 1])
same(compact({valueA: 1, valueB: undefined, valueC: null, valueD: []}), {valueA: 1, valueD: []})
