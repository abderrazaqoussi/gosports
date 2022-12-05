import polyline from '@mapbox/polyline'

export function toKilometre(metre) {
  return (metre / 1000).toFixed(1)
}

export function polyDecode(code) {
  return polyline.decode(code)
}
