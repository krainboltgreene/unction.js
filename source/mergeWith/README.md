# ramda-mergeWith

> (IterableType -> IterableType -> any) -> IterableType -> IterableType -> IterableType

Merges two iterables and uses a provided function to handle conflicts. The function is given the the left value and the right value.

``` javascript
import mergeWith from "ramda-mergeWith"

const left = {
  beta: "1"
}
const right = {
  beta: "2"
}

mergeWith((l, r) => l+r)(left)(right)
```

Which returns:

``` javascript
{
  beta: "12"
}
```
