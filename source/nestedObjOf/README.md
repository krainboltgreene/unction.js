# ramda-nestedObjOf

> (KeyType | Array<KeyType) -> any -> IterableType

Given a path and a value, it creates an object that has keys based on the path.

``` javascript
import nestedObjOf from "ramda-nestedObjOf"

nestedObjOf(["key", "subkey"])("value")
```

Which returns:

``` javascript
{
  key: {
    subkey: "value"
  }
}
```
