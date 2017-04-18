# ramda-compact

> Array<any> -> Array<mixed>

Takes a collection (Array or Object) and returns a copy of that value without `null` or `undefined` values.


``` javascript
import {prop} from "ramda"
import {head} from "ramda"
import compact from "ramda-compact"
import {users} from "./users"

const avatarUrls = map(prop("avatar"), users())
console.log(avatarUrls) // => [null, "/1.jpg", null, "/3.jpg"]
console.log(compact(avatarUrls))

const attributes = head(users)
console.log(attributes) // {"avatar": null, "name": "Kurtis Rainbolt-Greene"}
console.log(compact(attributes)) // {"name": "Kurtis Rainbolt-Greene"}
```
