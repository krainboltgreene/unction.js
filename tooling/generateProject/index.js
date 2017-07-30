/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {writeFile} from "fs-extra"
import thenP from "@unction/thenp"

import allPackages from "../shared/allPackages"
import readmeMd from "./readmeMd"


export default function generateProject () {
  return allPackages()
    | thenP((names) => readmeMd(names)
      | thenP((data) => writeFile("README.md", data))
      | thenP(() => names))
    | thenP(() => process.exit())
}
