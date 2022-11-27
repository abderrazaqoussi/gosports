export function getHours() {
  let arr = []
  for (let i = 0; i <= 23; i++) {
    if (i < 10) {
      arr.push(`0${i}`)
    } else {
      arr.push(`${i}`)
    }
  }

  return arr
}
