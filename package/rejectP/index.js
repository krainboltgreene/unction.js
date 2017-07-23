export default function rejectP (value: any): Promise<any> {
  return Promise.reject(value)
}
