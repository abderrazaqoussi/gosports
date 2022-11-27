export default function converToImage(obj) {
  return `data:image/png;base64,${window.btoa(
    new Uint8Array(obj?.data.data).reduce(function (data, byte) {
      return data + String.fromCharCode(byte)
    }, '')
  )}`
}
