import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

export default function ListView({ user, activity, setPickData }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', height: '150px' }}>
      {activity.name}
      <Button
        onClick={() => {
          setPickData({ user, activity })
        }}
      >
        See More
      </Button>
    </Box>
  )
}
