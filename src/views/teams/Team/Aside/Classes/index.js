// ** import from React
import { useState } from 'react'

// ** import from MUI
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
// import addSeanceForm from './addSeanceForm'

export default function Index() {
  // set Hooks

  const [isOpen, setIsOpen] = useState(false)

  // set Styles
  const style = {
    containerStyle: {
      width: '100%',
      padding: '.75rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
      borderTop: '1px solid #edf2f4'
    },
    modelStyle: {
      position: 'absolute',
      width: '100vw',
      height: '100vh',
      top: 0,
      left: 0
    }
  }

  return (
    <>
      {!isOpen ? (
        <Box sx={style.containerStyle}>
          <Button
            sx={{ width: '100%' }}
            onClick={() => {
              setIsOpen(true)
            }}
            variant='contained'
          >
            Add Class
          </Button>
          <Box className='Model'>{'Planned Classes Here'}</Box>
        </Box>
      ) : (
        <Box sx={style.containerStyle}>
          <Button
            sx={{ width: '100%' }}
            onClick={() => {
              setIsOpen(false)
            }}
            variant='contained'
          >
            Back
          </Button>
          <Box>{/* <addSeanceForm /> */}</Box>
        </Box>
      )}
    </>
  )
}
