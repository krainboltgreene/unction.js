/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {join} from "path"
import {writeFile} from "fs-extra"
import thenP from "@unction/thenp"
import allP from "@unction/allp"

import allPackages from "../shared/allPackages"
import indexJs from "./indexJs"
import packageJson from "./packageJson"
import readmeMd from "./readmeMd"

export default function generateComplete () {
  return allPackages()
    | thenP((names) => {
      return allP([
        indexJs(names),
        packageJson(names),
        readmeMd(names),
      ])
        | thenP(([first, second, third]) => allP([
          writeFile(join("package", "complete", "index.js"), first),
          writeFile(join("package", "complete", "package.json"), second),
          writeFile(join("package", "complete", "README.md"), third),
        ]))
    })
    | thenP(() => process.exit())
}
