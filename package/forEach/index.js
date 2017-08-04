export default function forEach (unction: any => KeyType => any): Function {
  return function forEachUnction (iterable: IterableType): IterableType {
    if (typeof iterable.forEach === "function") {
      iterable.forEach((value: any, key: KeyType) => {
        unction(value)(key)
      })

      return iterable
    }

    if (iterable.toString() === "[object Object]") {
      Object.entries(iterable).forEach(([key, value]: [KeyType, any]) => {
        unction(value)(key)
      })

      return iterable
    }

    throw new Error("Tried to figure out the iterative function for iterable but couldn't")
  }
}
