export default function catchP (rejection: any => any): Function {
  return function catchPrejection (promise: Promise<any>): Promise<any> {
    return promise.catch(rejection)
  }
}
