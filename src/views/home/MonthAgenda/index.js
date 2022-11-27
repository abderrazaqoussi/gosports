// ** import from React
import { useState } from 'react'

// ** import Methodes
import { getDays, getMonths, getMonth, activityByDay, compareDate } from './utils'

// ** import from MUI
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'

export default function Month({ month = new Date().getMonth() + 1, year = new Date().getFullYear() }) {
  const [data, setData] = useState(getMonth(year, month))

  const [today, setToday] = useState([new Date().getDate(), getDays()[new Date().getDay()]])

  const thisdaystyle = day => {
    return `${day === today[1] && getMonths()[new Date().getMonth()] === data[15].monthName ? '#ef233c' : ''}`
  }

  const containerStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }

  const cardStyle = {
    width: 'calc(100%/7)',
    height: '30px'
  }

  return (
    <>
      <header>
        <Box
          sx={{
            width: '100%',
            fontWeight: '600',
            fontSize: '1.4rem'
          }}
        >
          {`${data[15].monthName}`}
        </Box>
        <Box sx={{ ...containerStyle, marginTop: '1rem' }}>
          {getDays().map(day => {
            return (
              <Typography
                key={getDays().indexOf(day)}
                sx={{
                  width: 'calc(100%/7)',
                  fontWeight: 600,
                  textAlign: { xs: 'center', lg: 'left' },
                  color: thisdaystyle(day)
                }}
              >
                {day}
              </Typography>
            )
          })}
        </Box>
      </header>
      <Box sx={containerStyle}>
        {data.map(el => {
          return (
            <Box key={data.indexOf(el)} sx={cardStyle}>
              <Typography
                sx={{
                  width: '100%',
                  minHeight: 'max-content',
                  padding: { lg: '.5rem .75rem' },
                  fontWeight: '500',
                  textAlign: { xs: 'center', lg: 'left' },
                  color: `${data[15].monthName === data[data.indexOf(el)].monthName ? '' : '#8d99ae'} ${
                    el.dayDate === today[0] && getMonths()[new Date().getMonth()] === data[15].monthName ? 'red' : ''
                  }`
                }}
              >
                {el.dayDate}
              </Typography>
            </Box>
          )
        })}
      </Box>
    </>
  )
}
