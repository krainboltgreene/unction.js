import {same} from "tap"

import hammer from "./"

same(
  hammer(
    "attributes",
    {
      id: "1",
      attributes: {name: "Kurtis Rainbolt-Greene"},
    }
  ),
  {
    id: "1",
    name: "Kurtis Rainbolt-Greene",
  }
)
