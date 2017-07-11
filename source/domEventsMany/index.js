import mergeRight from "@unction/mergeright"
import reduceValues from "@unction/reducevalues"
import mapValues from "@unction/mapvalues"
import domEvents from "@unction/domevents"
import xstream from "xstream"

const EVENT_TYPES = [
  "click",
]


export default function domEventsMany (options: DOMEventsConfigurationType): Function {
  return function domEventsManyOptions (names: "*" | Array<EventNameType>): Function {
    const eventNames = names === "*" ? EVENT_TYPES : names

    return function domEventsManyOptionsNames (dom: DOMObservableType): ObservableType<EventType> {
      return reduceValues(
        mergeRight
      )(
        xstream.never()
      )(
        mapValues((name: EventNameType): ObservableType<EventType> => domEvents(options)(name)(dom))(eventNames)
      )
    }
  }
}
