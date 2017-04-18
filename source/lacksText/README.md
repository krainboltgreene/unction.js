# ramda-lacksText

> (string | RegExp) -> string -> boolean

Determines if a set of text does not have a subset of text.

``` javascript
const data = "I love pies!"
const lacksBestFood = lacksText("pizza")

lacksBestFood(data) // false
```

``` javascript
const data = "I love pies!"
const lacksPuncation = lacksText(/\!|\?|\./)

lacksPuncation(data) // false
```
