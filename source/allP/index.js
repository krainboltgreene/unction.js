// > ? Array of Promise(Anything):a -> Promise(Array of Promise(Anything):a)
//
// A port of the `Promise.all()` function.
// Credit: @keithamus

export default Promise.all.bind(Promise)
