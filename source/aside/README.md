# ramda-aside

> Array<(any => any)> -> any -> any

Use this function to do thing aside of a main pipeline.

``` javascript
import {pipe} from "ramda"
import aside from "ramda-aside"
import format from "../format"
import log from "../log"
import processData from "../processData"

export default function generateGraph () {
  return pipe(
    aside([format, log]),
    processData
  )
}
```
