import createIndexFile from "./createIndexFile"
import createPackageJsonFile from "./createPackageJsonFile"

Promise.all([
  createIndexFile(),
  createPackageJsonFile(),
])
  .then(() => {
    process.exit()
  })
  .catch((error: Error) => {
    logger.error(error)
    process.exit()
  })
