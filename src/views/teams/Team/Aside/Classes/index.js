// ** import from React
import { useState } from 'react'

// ** import from MUI
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

export default function Index() {
  // set Hooks

  const [isOpen, setIsOpen] = useState(false)

  // set Styles
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    borderTop: '1px solid #edf2f4'
  }

  const modelStyle = {
    position: 'absolute',
    width: '100vw',
    height: '100vh',
    top: 0,
    left: 0
  }

  return (
    <>
      {!isOpen ? (
        <Box sx={containerStyle}>
          <Button
            sx={{ width: '100%' }}
            onClick={() => {
              setIsOpen(true)
            }}
          >
            Add Class
          </Button>
          <Box className='Model'>{'Planned Classes Here'}</Box>
        </Box>
      ) : (
        <Box sx={containerStyle}>
          <Button
            onClick={() => {
              setIsOpen(false)
            }}
          >
            Back
          </Button>
          <Box>{'Form Here'}</Box>
        </Box>
      )}
    </>
  )
}
