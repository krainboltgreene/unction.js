import {same} from "tap"
import computedProp from "./"

same(
  computedProp(
    ({id, attributes: {username}}) => `${username}#${id}`,
    "tag",
    {
      id: "1",
      attributes: {username: "krainboltgreene"},
    }
  ),
  {
    id: "1",
    tag: "krainboltgreene#1",
    attributes: {username: "krainboltgreene"},
  }
)
same(
  computedProp(
    ({id, attributes: {username}}) => `${username}#${id}`,
    ["attributes", "tag"],
    {
      id: "1",
      attributes: {username: "krainboltgreene"},
    }
  ),
  {
    id: "1",
    attributes: {
      username: "krainboltgreene",
      tag: "krainboltgreene#1",
    },
  }
)
