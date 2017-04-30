export default function iterateFunction (iterable: IterableType): Function {
  return function iterateFunctionIterable (unction: Function): Function {
    if (typeof iterable.forEach === "function") {
      return iterable.forEach(unction)
    }

    if (iterable.toString() === "[object Object]") {
      return Object.entries(iterable).forEach(([key, value]: [KeyType, any]) => {
        unction(value, key)
      })
    }

    throw new Error("Tried to figure out the iterative function for iterable but couldn't")
  }
}
