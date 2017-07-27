import {join} from "fs"
import glob from "glob-promise"
import thenP from "@unction/thenp"
import mapValues from "@unction/mapvalues"
import {last} from "ramda"
import {split} from "ramda"

export default function allPackages (): Promise<Array<string>> {
  return glob(join(".", "package", "*"))
    | thenP(mapValues(split("/")))
    | thenP(mapValues(last))
}
