export default function thenP (resolution: any => any): Function {
  return function thenPResolution (promise: Promise<any>): Promise<any> {
    return promise.then(resolution)
  }
}
