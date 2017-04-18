export default function thenCatchP (resolution: any => any): Function {
  return function thenCatchPResolution (rejection: any => any): Function {
    return function thenCatchPResolutionRejection (promise: Promise<any>): Promise<any> {
      return promise.then(resolution, rejection)
    }
  }
}
