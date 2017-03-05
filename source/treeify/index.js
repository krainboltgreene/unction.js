// const ƒunctions = {
//   groupBy,
//   indexBy
// }
//
// export default function invoke (path) {
//   const [invokation, property] = toPairs(path)
//   const getter = prop(property)
//
//   return ƒunctions[invokation](getter)
// }
// export default function incantations (paths) {
//   return map(invoke)
// }
//
// export default function treeify (paths, structures) {
//   return map(
//     reverse(incantations(paths))
//   )
// }
//
// treeify(
//   [
//     {groupBy: ["type"]},
//     {indexBy: ["id"]},
//   ],
//   [
//     {id: 1, type: "accounts"},
//     {id: 5, type: "polishes"},
//     {id: 2, type: "accounts"},
//     {id: 1, type: "polishes"},
//     {id: 3, type: "accounts"},
//   ],
// )
// // returns
// {
//   "accounts": {
//     1: {id: 1, type: "accounts"},
//     2: {id: 2, type: "accounts"},
//     3: {id: 3, type: "accounts"},
//   },
//   "accounts": {
//     1: {id: 1, type: "polishes"},
//     5: {id: 5, type: "polishes"},
//   },
// }
