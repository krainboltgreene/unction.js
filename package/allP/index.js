export default function allP (values: Array<any | Promise<any>>): Promise<Array<any>> {
  return Promise.all(values)
}
