import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

export default function ExitTeam({ teamId }) {
  const containerStyle = {
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    borderRadius: '10px',
    padding: '1rem .75rem'
  }

  return (
    <Box sx={containerStyle}>
      <Box className='title' sx={{ fontSize: '1.2rem', fontWeight: 600 }}>
        Exit Group
      </Box>
      <Box className='desc'>
        Permanently remove your group and all of its contents from the platform. This action is not reversible, so
        please continue with caution.
      </Box>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
        <Button variant='contained' sx={{ background: '#e63946', '&:hover': { background: '#e63946', opacity: 0.9 } }}>
          Exit Group
        </Button>
      </Box>
    </Box>
  )
}
