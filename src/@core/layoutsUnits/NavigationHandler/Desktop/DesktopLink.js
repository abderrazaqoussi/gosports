// ** import from React
import { useState } from 'react'

// ** import from MUI
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

export default function DescktopLink({ data, active }) {
  // ** Hooks
  const mediumScreen = useMediaQuery(theme => theme.breakpoints.down('md'))
  const [isMouseOn, setIsMouseOn] = useState(false)
  const theme = useTheme()

  return (
    <Box
      onMouseOver={() => {
        setIsMouseOn(true)
      }}
      onMouseOut={() => {
        setIsMouseOn(false)
      }}
      sx={{
        display: 'grid',
        placeItems: 'center',
        position: 'relative',
        '& svg': { fill: `${active ? theme.palette.svg.default : theme.palette.svg.disabled}` },
        padding: '.5rem 0'
      }}
    >
      <data.icon />
      <Box
        sx={{
          position: 'absolute',
          display: `${isMouseOn ? 'grid' : 'none'}`,
          placeItems: 'center',
          right: '-110px',
          width: '100px',
          height: '35px',
          zIndex: 99,
          fontSize: '.8rem',
          paddingLeft: '.5rem',
          background: theme.palette.svg.default,
          color: '#fff',
          clipPath: 'polygon(12% 35.3%, 12% 0%, 100% 0%, 100% 100%, 12% 100%, 12% 64%, 0% 50%)'
        }}
      >
        {data.title}
      </Box>
    </Box>
  )
}
