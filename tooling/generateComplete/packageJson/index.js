/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import dependencies from "./dependencies"

export default function packageJson (names) {
  return JSON.stringify({
    name: "@unction/complete",
    version: "1.0.0",
    description: "The entirety of all unction fucntions",
    keywords: [
      "unction",
      "functional",
    ],
    author: "Kurtis Rainbolt-Greene (@krainboltgreene) <kurtis@rainbolt-greene.online>",
    license: "ISC",
    homepage: "https://github.com/krainboltgreene/unction.js#readme",
    repository: {
      type: "git",
      url: "git+https://github.com/krainboltgreene/unction.js.git",
    },
    bugs: {url: "https://github.com/krainboltgreene/unction/issues"},
    main: "transpiled/index.js",
    scripts: {
      prepare: "npm run build",
      build: "babel './index.js' './test.js' -d './transpiled/'",
      lint: "eslint './index.js'",
    },
    ...dependencies(names),
  }, null, "  ")
}
