import {pipe} from "ramda"
import tapP from "../tapP"

export default function asideP (...ƒunctions) {
  return tapP(pipe(...ƒunctions))
}
