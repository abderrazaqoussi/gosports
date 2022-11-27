import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { deleteTeam } from 'src/utils/api/apisConfig'
import { useRouter } from 'next/router'

export default function DeletTeam({ teamId }) {
  const router = useRouter()
  const handelDeleteTeam = () => {
    deleteTeam(teamId)
    router.push('/teams')
  }
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
        Delete Group
      </Box>
      <Box className='desc'>
        Permanently remove your group and all of its contents from the platform. This action is not reversible, so
        please continue with caution.
      </Box>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
        <Button
          variant='contained'
          sx={{ background: '#e63946', '&:hover': { background: '#e63946', opacity: 0.9 } }}
          onClick={handelDeleteTeam}
        >
          Delete Group
        </Button>
      </Box>
    </Box>
  )
}
