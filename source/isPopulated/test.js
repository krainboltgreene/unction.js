import {equal} from "tap"

import isPopulated from "./"

equal(isPopulated(["a"]), true)
equal(isPopulated([[]]), true)
equal(isPopulated([{}]), true)
equal(isPopulated([]), false)
equal(isPopulated([undefined]), false)
equal(isPopulated([undefined]), false)
equal(isPopulated([null]), false)
