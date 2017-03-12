// > ? (Array or Object):a -> Function -> (Array or Object):b
//
// Just like map, but gives back the index argument (as an integer, not a string if array)
import {map} from "ramda"
import {addIndex} from "ramda"

export default addIndex(map)
