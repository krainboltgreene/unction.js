# ramda-nestedApply

> (any -> any) -> (any -> any -> any) -> number -> IterableType -> IterableType

Takes a function (the application) that takes function(s) (later referred to as
the inner) and value(s) (`map()`, `forEach()`, `find()`), a function (the inner)
that will be applied to a value(s), and finally a number (depth) to apply that
applicator around the inner.

In the below example we want to take two sets of records and index them by id:

``` javascript
import nestedApply from "ramda-nestedApply"

const records = [
  [
    {
      id: "a1",
      type: "commercial",
    },
    {
      id: "a2",
      type: "commercial",
    }
  ],
  [
    {
      id: "b1",
      type: "residential",
    },
    {
      id: "b2",
      type: "residential",
    }
  ]
]
```

Normally we'd just do `map(map(indexBy(prop("id"))))`, however we can make this easier and dynamic:

``` javascript
const nestedIndexById = nestedApply(map)(indexBy(prop("id")))(1)

nestedIndexById(records)
```

And the result:

``` javascript
[
  {
    a1: {
      id: "a1",
      type: "commercial",
    },
    a2: {
      id: "a2",
      type: "commercial",
    },
  },
  {
    b1: {
      id: "b1",
      type: "residential",
    },
    b2: {
      id: "b2",
      type: "residential",
    },
  },
]
```
