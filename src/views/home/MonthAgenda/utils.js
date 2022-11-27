export function getDays(wholeName = false) {
  if (wholeName) return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
}

export function getMonths() {
  return [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
}

export function getWeek(
  year = new Date().getFullYear(),
  month = new Date().getMonth() + 1,
  day = new Date().getDate(),
  arr
) {
  let current = new Date(year, month - 1, day)

  var week = []

  // Starting Sunday not Monday
  current.setDate(current.getDate() - current.getDay()) // add 1 to start from Monday
  switch (arr) {
    case 'date':
      for (var i = 0; i < 7; i++) {
        week.push(new Date(current).getDate())
        current.setDate(current.getDate() + 1)
      }
      break
    default:
      for (var i = 0; i < 7; i++) {
        week.push({
          dayName: getDays()[new Date(current).getDay()],
          dayDate: new Date(current).getDate(),
          monthName: getMonths()[new Date(current).getMonth()],
          monthDate: new Date(current).getMonth(),
          year: new Date(current).getUTCFullYear()
        })
        current.setDate(current.getDate() + 1)
      }
      break
  }

  return week
}

export function getMonth(year, month) {
  let monthArray = [
    ...getWeek(year, month, 1),
    ...getWeek(year, month, 8),
    ...getWeek(year, month, 15),
    ...getWeek(year, month, 22),
    ...getWeek(year, month, 29)
  ]

  return monthArray
}

export function compareDate(a, b) {
  if (
    new Date(a).getMonth() === new Date(b).getMonth() &&
    new Date(a).getDate() === new Date(b).getDate() &&
    new Date(a).getFullYear() === new Date(b).getFullYear()
  ) {
    return true
  } else {
    return false
  }
}

export function activityByDay(act) {
  let newData = []
  act.forEach(element => {
    newData.length
      ? newData.forEach(e => {
          if (compareDate(element.date, e.date)) {
            e.data.push(element)
          } else {
            newData.push({ date: element.date, data: [element] })
          }
        })
      : newData.push({ date: element.date, data: [element] })
  })

  return newData
}
