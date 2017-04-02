// > ?  (Array of Functions):a -> (Array or Object):b -> Object:c
//
// This takes a list of functions (the folders) and an array of objects or an
// object of objects (the collection) to create a tree. Each function in
// the list of folders will in some way return a new object. All of the objects
// produced are then turned into a final tree.
//
// ``` javascript
// import {treeify} from "ramda-extra"
//
// const collection = [
//   {
//     id: "a1",
//     type: "resources",
//     attributes: {
//       version: "v1",
//       namespace: "accounts",
//     }
//   },
//   {
//     id: "a2",
//     type: "resources",
//     attributes: {
//       version: "v1",
//       namespace: "accounts",
//     }
//   },
//   {
//     id: "b1",
//     type: "resources",
//     attributes: {
//       version: "v1",
//       namespace: "profiles",
//     }
//   },
//   {
//     id: "b1",
//     type: "resources",
//     attributes: {
//       version: "v2",
//       namespace: "profiles",
//     }
//   }
// ]
//
// // The order goes from outer layer to deeper layer, so in this case the outer
// // level properties will be based on `prop("type")`, and the deepest layer
// // properties will be based on `prop("id")`.
// const functions = [
//   groupBy(prop("type")),
//   groupBy(path(["attributes", "namespace"])),
//   groupBy(path(["attributes", "version"])),
//   indexBy(prop("id")),
// ]
//
// treeify(functions)(collection)
// ```
//
// The resulting object looks like this:
//
// ``` javascript
// {
//   resources: {
//     accounts: {
//       v1: {
//         a1: {
//           id: "a1",
//           type: "resources",
//           attributes: {
//             version: "v1",
//             namespace: "accounts",
//           }
//         },
//         a2: {
//           id: "a2",
//           type: "resources",
//           attributes: {
//             version: "v1",
//             namespace: "accounts",
//           }
//         }
//       }
//     },
//     profiles: {
//       v1: {
//         b1: {
//           id: "b1",
//           type: "resources",
//           attributes: {
//             version: "v1",
//             namespace: "profiles",
//           }
//         }
//       },
//       v2: {
//         b1: {
//           id: "b1",
//           type: "resources",
//           attributes: {
//             version: "v2",
//             namespace: "profiles",
//           }
//         }
//       }
//     }
//   }
// }
// ```
import {map} from "ramda"
import {unary} from "ramda"
import {reduce} from "ramda"

import mapWithIndex from "../mapWithIndex"
import nestedApply from "../nestedApply"

export default function treeify (folders: Array<Function>): Function {
  return function treeifyCollection (collection: Array<Object>): Object {
    return reduce(
      (tree: any, migration: Function): any => migration(tree),
      collection,
      mapWithIndex((unction: Function, index: number): Function => nestedApply(unary(map))(unction)(index), folders)
    )
  }
}
