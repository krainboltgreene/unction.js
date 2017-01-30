// > ? Anything:a -> Promise(Anything:a)
//
// A port of the `Promise.reject()` function.
// Credit: @keithamus

export default Promise.reject.bind(Promise)
