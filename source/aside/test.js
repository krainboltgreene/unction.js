import {equal} from "tap"
import {ok} from "tap"
import {spy} from "sinon"

import aside from "./"

const unctions = spy((): string => "b")

equal(aside(unctions)("a"), "a")
ok(unctions.calledWith("a"))
equal(aside(unctions, unctions)("a"), "a")
ok(unctions.calledWith("b"))
