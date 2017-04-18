import {map} from "ramda"
import {addIndex} from "ramda"

// TODO: Write our own addIndex that does only curry
export default function mapWithIndex (unction: any => KeyType => any): Function {
  return function mapWithIndexUnction (iterable: IterableType): IterableType {
    return addIndex(map)(unction)(iterable)
  }
}
