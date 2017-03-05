import {equal} from "tap"

import isPresent from "./"

equal(isPresent(true), true)
equal(isPresent([]), true)
equal(isPresent({}), true)
equal(isPresent(""), true)
equal(isPresent(0), true)
equal(isPresent(false), true)
equal(isPresent(null), false)
equal(isPresent(undefined), false)
