import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MoreIcon from 'public/icons/MoreIcon'
import useUserId from 'src/utils/hooks/useUserId'
import { getUserById, updateUserRole } from 'src/utils/api/apisConfig'
import { useQueries, useMutation } from 'react-query'
import capitalizeFirstLetter from 'src/utils/strings/capitalizeFirstLetter'

export default function TeamMembers({ team }) {
  const { data: myId } = useUserId()
  const updateRole = useMutation(updateUserRole)
  const usersData = useQueries(
    team.members.map(user => {
      return {
        queryKey: ['user', user.id],
        queryFn: () => getUserById(user.id)
      }
    })
  )
  useEffect(() => {
    console.log(usersData)
  })
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleUpdateRole = () => {}

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

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
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '.5rem ',
      borderBottom: '1px solid #edf2f4',
      gap: '10px',
      '&:last-child': {
        border: 'none'
      }
    }
  }

  return (
    <Box sx={style.containerStyle}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {usersData.map(userData => {
          return (
            <Box key={usersData.indexOf(userData)} sx={style.cardStyle}>
              <Avatar src={userData?.data?.data.image} alt='Remy Sharp' referrerPolicy='no-referrer' />
              <Typography>{userData?.data?.data.name}</Typography>
              <Box
                sx={{
                  marginLeft: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px'
                }}
              >
                <Typography
                  sx={{
                    // background: `${colorTransparency('#f4a261', 10)}`,
                    color: '#f4a261',
                    padding: '.25rem .5rem',
                    fontSize: '.9rem',
                    borderRadius: '15px'
                  }}
                >
                  {userData.data
                    ? capitalizeFirstLetter(team.members.find(e => e.id === userData?.data?.data._id)?.role)
                    : ''}
                </Typography>
                {team.members.find(e => e.id === myId)?.role === 'owner' ||
                team.members.find(e => e.id === myId)?.role === 'coach' ? (
                  <Box>
                    <IconButton
                      id='basic-button'
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup='true'
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}
                    >
                      <MoreIcon />
                    </IconButton>
                    <Menu
                      id='basic-menu'
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      sx={{
                        '& .MuiMenu-paper': {
                          boxShadow: 'none',
                          border: '1px solid #edf2f4'
                        }
                      }}
                    >
                      {team.members.find(e => e.id === userData?.data?.data._id)?.role === 'owner' ? null : (
                        <>
                          <MenuItem
                            onClick={() => {
                              console.log(userData?.data?.data._id)
                              updateRole.mutate(team._id, userData?.data?.data._id)
                              handleClose()
                            }}
                          >
                            {/* {team.members.find(e => e.id === userData?.data?.data._id)?.role === 'athlete' ? (
                              <>Promote</>
                            ) : (
                              <>Demote</>
                            )} */}
                          </MenuItem>
                          <MenuItem onClick={handleClose}>Remove</MenuItem>
                        </>
                      )}
                    </Menu>
                  </Box>
                ) : null}
              </Box>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}
