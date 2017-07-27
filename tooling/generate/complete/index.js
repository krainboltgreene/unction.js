export default function generateComplete () {
  return allPackages()
    | thenP()
}
