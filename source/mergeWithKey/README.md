# ramda-mergeWithKey

> (KeyType -> IterableType -> IterableType -> any) -> IterableType -> IterableType -> IterableType

Merges two iterables and uses a provided function to handle conflicts. The function is given the key, the left value, and the right value.

``` javascript
import mergeWithKey from "ramda-mergeWithKey"

const left = {
  beta: "1"
}
const right = {
  beta: "2"
}

mergeWith((key, leftValue, rightValue) => key+leftValue+rightValue)(left)(right)
```

Which returns:

``` javascript
{
  beta: "beta12"
}
```
