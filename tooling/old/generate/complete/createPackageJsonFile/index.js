import {join} from "path"
import glob from "glob-promise"
import {outputFile} from "fs-extra"
import {split} from "ramda"
import {join as rJoin} from "ramda"
import {last} from "ramda"
import mapValues from "@unction/mapvalues"

const prependString = (left: string): Function => (right: string): string => `${left}${right}`
const appendString = (left: string): Function => (right: string): string => `${right}${left}`

export default function createIndexFile (): Promise<string> {
  return glob(join(".", "package", "*"))
    .then((paths: Array<string>): string => {
      return paths
        | mapValues(split("/"))
        | mapValues(last)
        | mapValues((name: string): string => `    "@unction/${name.toLowerCase()}": "*"`)
        | rJoin(",\n")
        | prependString(`{
  "name": "@unction/completePackage",
  "version": "0.0.0",
  "description": "All @unction functions in a single package",
  "keywords": [
    "unction",
    "functional"
  ],
  "author": "Kurtis Rainbolt-Greene (@krainboltgreene) <kurtis@rainbolt-greene.online>",
  "license": "ISC",
  "homepage": "https://github.com/krainboltgreene/unction.js#readme",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/krainboltgreene/unction.js.git"
  },
  "bugs": {
    "url": "https://github.com/krainboltgreene/unction/issues"
  },
  "main": "transpiled/index.js",
  "scripts": {
    "prepare": "npm run build",
    "pretest": "npm run build",
    "test": "tap --reporter min './transpiled/test.js'",
    "build": "babel './index.js' './test.js' -d './transpiled/'",
    "lint": "eslint './index.js'"
  },
  "devDependencies": {
    "tap": "10.3.3"
  },
  "dependencies": {
`)
        | appendString(`
  }
}`)
    })
    .then((imports: string): string => outputFile(join(".", "package", "complete", "package.json"), imports))
}
