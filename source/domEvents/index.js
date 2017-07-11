export default function domEvents (options: DOMEventsConfigurationType): Function {
  return function domEventsOptions (name: EventNameType): Function {
    return function domEventsOptionsName (dom: DOMObservableType): ObservableType<EventType> {
      return dom.events(name, options)
    }
  }
}
