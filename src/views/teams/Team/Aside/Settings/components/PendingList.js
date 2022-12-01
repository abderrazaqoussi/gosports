import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import { getUserById, AcceptUserDemand, RejectUserDemand } from 'src/utils/api/apisConfig'
import { useQueries, useMutation } from 'react-query'
import CheckIcon from 'public/icons/CheckIcon'
import CloseIcon from 'public/icons/CloseIcon'

export default function PendingList({ list, teamId }) {
  const handleConfirmation = useMutation(AcceptUserDemand)
  const handleRejection = useMutation(RejectUserDemand)
  const usersData = useQueries(
    list.map(user => {
      return {
        queryKey: ['user', user],
        queryFn: () => getUserById(user)
      }
    })
  )

  const style = {
    containerStyle: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      padding: '1.5rem 1.25rem',
      borderTop: '1px solid #edf2f4'
    },
    cardStyle: {
      width: '100%',
      height: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '.5rem ',
      borderBottom: '1px solid #edf2f4',
      gap: '10px',
      '&:last-child': {
        border: 'none'
      }
    },
    buttonStyle: {
      maxHeight: '30px',
      maxWidth: '30px',
      minWidth: '30px',
      minHeight: '30px',
      borderRadius: '50%',
      display: 'grid',
      placeItems: 'center',
      padding: 0
    }
  }

  return (
    <Box sx={style.containerStyle}>
      <Box className='title' sx={{ fontSize: '1.2rem', fontWeight: 600 }}>
        Join Requests
      </Box>
      <Box>
        {usersData.map(userData => {
          if (userData.isSuccess) {
            return (
              <Box key={usersData.indexOf(userData)} sx={style.cardStyle}>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <Avatar
                    src={userData.data.data.image}
                    alt='Remy Sharp'
                    referrerPolicy='no-referrer'
                    sx={{ maxWidth: '40px', maxHeight: '40px' }}
                  />
                  <div
                    style={{
                      display: 'grid',
                      placeItems: 'center',
                      maxWidth: '60%',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {userData.data.data.name}
                  </div>
                </div>

                <Box sx={{ display: 'flex', gap: '10px' }}>
                  <Button
                    sx={{ ...style.buttonStyle, '& svg': { fill: 'green' } }}
                    onClick={() => {
                      handleConfirmation.mutate({ teamId, userId: userData.data.data._id })
                    }}
                  >
                    <CheckIcon />
                  </Button>
                  <Button
                    sx={{ ...style.buttonStyle, '& svg': { fill: 'red' } }}
                    onClick={() => {
                      handleRejection.mutate({ teamId, userId: userData.data.data._id })
                    }}
                  >
                    <CloseIcon />
                  </Button>
                </Box>
              </Box>
            )
          }
        })}
      </Box>
    </Box>
  )
}
