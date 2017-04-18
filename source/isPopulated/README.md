# ramda-isPopulated

> IterableType -> boolean

Allows you to check if a container has any items.

``` javascript
import {isPopulated} from "ramda"

isPopulated([1]) // true
isPopulated({a: 'b'}) // true
isPopulated({}) // false
isPopulated([]) // false
```
