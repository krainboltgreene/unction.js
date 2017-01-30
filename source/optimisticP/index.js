// ? Array of Promise(pending) -> Array of Promise(resolved)
//
// Will take an array of promises and only return a promise of the resolved promises.

import {map} from "ramda"
import {pipe} from "ramda"
import {objOf} from "ramda"
import {prop} from "ramda"
import {filter} from "ramda"
import thenCatchP from "../thenCatchP"
import thenP from "../thenP"
import allP from "../allP"

export default function optimisticP (list) {
  return pipe(
    map(thenCatchP(objOf("resolved"), objOf("rejected"))),
    allP,
    thenP(pipe(filter(prop("resolved")), map(prop("resolved")))),
  )(list)
}
