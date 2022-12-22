import Image from 'next/image'
import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

export default function ListView({ user, activity, setPickData }) {
  return (
    <Box sx={{ display: 'flex', width: '100%', height: '150px', background: '#fff' }}>
      <div style={{ position: 'relative', width: '30%', height: '100%' }}>
        <Image src={user.image} alt={`${user.name} Profile Picture`} layout='fill' objectFit='cover' quality={100} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', padding: '.5rem .75rem' }}>
        <div>{activity.name}</div>
        <div></div>
        <div>
          <Button
            onClick={() => {
              setPickData({ user, activity })
            }}
          >
            See More
          </Button>
        </div>
      </div>
    </Box>
  )
}
