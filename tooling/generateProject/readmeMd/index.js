/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {join} from "path"
import {join as rJoin} from "ramda"
import mapValues from "@unction/mapvalues"
import {readFile} from "fs-extra"
import thenP from "@unction/thenp"
import allP from "@unction/allp"
import {replace} from "ramda"

const beginning = `# @unction/complete

A set of very useful function. These functions are bound by these principles:

  1. All functions will have type annotations.
  2. All functions will only take a single argument.
  3. All functions are curried.
  4. All inner functions will be named based on the outer function and it's argument name.
  5. Functions that deal with key values will take KeyChains (a list of keys).
  6. Functions that deal with types will take their string name form.
  7. Functions that mutate the original value, though rare, will have a suffix of \`M\`.
  8. Functions that take or return promises will have a suffix of \`P\`.
  9. Functions that can work on one type of Iterable can work on another type, covering:
    1. Array
    2. Set
    3. Map
    4. Object (record)
    5. String


![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]


## using

Each function is a unique package with it's own source, transpiliation, and tests. To get a function simply install:

\`\`\`
$ npm install --save-dev @unction/hammer@latest
\`\`\`

and then import:

\`\`\` javascript
import hammer from "@unction/hammer"
\`\`\`



`
const ending = `
[BADGE_TRAVIS]: https://img.shields.io/travis/krainboltgreene/unction.js.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/krainboltgreene/unction.js.svg?maxAge=2592000&style=flat-square
`

const prepend = (left) => (right) => `${left}${right}`
const append = (left) => (right) => `${right}${left}`

export default function readmeMd (names) {
  return names
    | mapValues((name) => readFile(join(".", "package", name, "README.md"), "utf-8"))
    | allP
    | thenP(mapValues(replace("# @unction/", "## @unction/")))
    | thenP(mapValues(replace("![Tests][BADGE_TRAVIS]\n", "")))
    | thenP(mapValues(replace("![Stability][BADGE_STABILITY]\n", "")))
    | thenP(mapValues(replace("![Dependencies][BADGE_DEPENDENCY]\n", "")))
    | thenP(mapValues(replace("[BADGE_TRAVIS]: https://img.shields.io/travis/krainboltgreene/unction.js.svg?maxAge=2592000&style=flat-square\n", "")))
    | thenP(mapValues(replace(/\[BADGE_VERSION\]: https:\/\/img\.shields\.io\/npm\/v\/@unction\/.+\.svg\?maxAge=2592000&style=flat-square\n/, "")))
    | thenP(mapValues(replace("[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square\n", "")))
    | thenP(mapValues(replace("[BADGE_DEPENDENCY]: https://img.shields.io/david/krainboltgreene/unction.js.svg?maxAge=2592000&style=flat-square\n", "")))
    | thenP(rJoin("\n\n"))
    | thenP(prepend(beginning))
    | thenP(append(ending))
    | thenP(append("\n"))
}
