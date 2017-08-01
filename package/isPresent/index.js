/* eslint-disable no-undefined */

export default function isPresent (value: mixed): boolean {
  return !(value === undefined || value === null)
}
