const toFindDuplicates = arry => arry.filter((item, index) => arry.indexOf(item) !== index)

export default function removeAllDuplicatedObjects(arr) {
  let indexs = []
  arr.map(e => indexs.push(e.id))
  console.log(indexs)
  if (indexs.length > 1) {
    const duplicateElementa = toFindDuplicates(indexs)
    return arr.filter(e => !duplicateElementa.includes(e.id))
  } else {
    return arr
  }
}
