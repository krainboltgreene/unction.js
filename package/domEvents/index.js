export default function domEvents (options: DOMEventsConfigurationType): Function {
  return function domEventsOptions (name: DOMEventNameType): Function {
    return function domEventsOptionsName (dom: DOMStreamType): DOMEventStreamType {
      return dom.events(name, options)
    }
  }
}
