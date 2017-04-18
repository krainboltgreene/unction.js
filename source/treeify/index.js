import {map} from "ramda"
import {reduce} from "ramda"
import mapWithIndex from "ramda-mapWithIndex"
import nestedApply from "ramda-nestedApply"

export default function treeify (folders: Array<Function>): Function {
  return function treeifyCollection (collection: Array<IterableType>): IterableType {
    return reduce(
      (tree: IterableType, migration: Function): IterableType => migration(tree)
    )(
      collection
    )(
      mapWithIndex((unction: Function, index: number): Function => nestedApply(map)(unction)(index))(folders)
    )
  }
}
