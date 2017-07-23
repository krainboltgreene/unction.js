/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"
import computedProp from "./"

test(({same, end}) => {
  same(
    computedProp(
      ({id, attributes: {username}}) => `${username}#${id}`
    )(
      ["tag"]
    )(
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

  end()
})

test(({same, end}) => {
  same(
    computedProp(
      ({id, attributes: {username}}) => `${username}#${id}`
    )(
      ["attributes", "tag"]
    )(
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


  end()
})
