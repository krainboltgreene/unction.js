import {isEmpty} from "ramda"

export default function isPopulated (list) {
  return !isEmpty(list)
}
