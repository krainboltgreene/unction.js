// > ? Anything:a -> Promise(Anything:a)
//
// A port of the `Promise.resolve()` function.
// Credit: @keithamus

export default Promise.resolve.bind(Promise)
