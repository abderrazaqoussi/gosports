// ** import from React & Next
import Image from 'next/image'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useCookie } from 'next-cookie'

// ** import from MUI
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material'

// ** import Utils
import useMediaQuery from '@mui/material/useMediaQuery'
import converToImage from 'src/utils/images/converBufferToImage'
import DraggableBox from 'src/components/DraggableBox'
import AddTeamBtn from './AddTeamBtn'
import NoImage from 'public/icons/NoImage'

export default function Index({ teams }) {
  // Use Hooks
  const mediumScreen = useMediaQuery(theme => theme.breakpoints.down('md'))
  const theme = useTheme()
  const router = useRouter()
  const cookie = useCookie()

  // use Methodes
  const handlePickedTeam = (id, name) => {
    return router.push(`/teams/${name.replace(/\s+/g, '').toLowerCase()}`)
  }

  // use Style
  const style = {
    asideStyle: {
      background: theme.palette.background.primary,
      width: { xs: '100%', md: '80px' },
      height: { xs: '70px', md: '100vh' },
      maxHeight: { xs: '70px', md: '100vh' },
      position: { xs: 'relative', md: 'sticky' },
      top: 0,
      left: 0,
      display: 'flex',
      flexDirection: { xs: 'row', md: 'column' },
      alignItems: 'center',
      gap: '10px',
      padding: '.75rem',
      overflow: 'hidden'
    },
    cardStyle: {
      minWidth: '46px',
      height: `46px`,
      minHeight: '46px',
      overflow: 'hidden',
      margin: 0,
      display: 'grid',
      placeItems: 'center',
      borderRadius: '50%',
      border: '2px solid #fff',
      outline: '2px solid #234',
      cursor: 'pointer',
      position: 'relative'
    },
    itemsBox: {
      padding: { xs: '1rem 1.25rem', md: '.25rem .5rem' },
      display: 'flex',
      flexDirection: { xs: 'row', md: 'column' },
      gap: '10px'
    }
  }

  return (
    <Box sx={style.asideStyle} component={'aside'}>
      <AddTeamBtn />
      <DraggableBox orientation={mediumScreen ? 'horizontal' : 'vertical'}>
        <Box sx={style.itemsBox}>
          {teams?.map(team => {
            return (
              <Button
                key={team._id}
                onClick={() => {
                  handlePickedTeam(team._id, team.name)
                }}
              >
                <Box className='child' sx={style.cardStyle}>
                  {team.teamImage ? (
                    <Image alt='test avatar' src={converToImage(team?.teamImage)} layout='fill' />
                  ) : (
                    <NoImage />
                  )}
                </Box>
              </Button>
            )
          })}
        </Box>
      </DraggableBox>
    </Box>
  )
}
