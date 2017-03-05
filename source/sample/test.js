import {includes} from "tap"
import {range} from "ramda"
import {intersection} from "ramda"

import sample from "../sample"

includes(intersection(sample(1, range(1, 100)), range(1, 100)), [])
