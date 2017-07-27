import {join} from "path"
import glob from "glob-promise"
import {outputFile} from "fs-extra"
import {split} from "ramda"
import {append} from "ramda"
import {join as rJoin} from "ramda"
import {last} from "ramda"
import mapValues from "@unction/mapvalues"

export default function createIndexFile (): Promise<string> {
  return glob(join(".", "package", "*"))
    .then((paths: Array<string>): string => {
      return paths
        | mapValues(split("/"))
        | mapValues(last)
        | mapValues((name: string): string => `export {default as ${name}} from "@unction/${name.toLowerCase()}"`)
        | append("")
        | rJoin("\n")
    })
    .then((imports: string): string => outputFile(join(".", "package", "complete", "index.js"), imports))
}
