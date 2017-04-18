# ramda-mapKeys

> (KeyType -> any) -> IterableType -> IterableType

Like ramda's map, but instead of the value it maps over keys.

``` javascript
import {kebab} from "case"
import mapKeys from "ramda-mapKeys"

const attributes = {
  name: "Kurtis Rainbolt-Greene",
  createdAt: new Date()
}

mapKeys(kebab)(attributes)
```

Would return:

``` javascript
{
  name: "Kurtis Rainbolt-Greene",
  "created-at": new Date()
}
```
