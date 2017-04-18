# ramda-hammer

> KeyType -> IterableType -> IterableType

Use this to de-nest a nested object.

``` javascript
import hammer from "ramda-hammer"

const payload = {
  id: 1
  attributes: {
    name: "Kurtis Rainbolt-Greene",
    age: 26
  }
}

hammer("attributes")(payload)
```

Which returns:

``` javascript
{
  id: 1,
  name: "Kurtis Rainbolt-Greene",
  age: 26
}
```
