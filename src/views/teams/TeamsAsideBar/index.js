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
import Loader from 'public/Loader'
import unifyingText from 'src/utils/strings/unifyingText'

export default function Index({ teams, isLoading }) {
  let iconSize = 48
  // Use Hooks
  const mediumScreen = useMediaQuery(theme => theme.breakpoints.down('md'))
  const theme = useTheme()
  const router = useRouter()
  const cookie = useCookie()

  // use Methodes
  const handlePickedTeam = (id, name) => {
    return router.replace(`${router.basePath}/teams/${unifyingText(name)}`)
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
      minWidth: `${iconSize}px`,
      minHeight: `${iconSize}px`,
      maxWidth: `${iconSize}px`,
      maxHeight: `${iconSize}px`,
      overflow: 'hidden',
      display: 'grid',
      placeItems: 'center',
      borderRadius: '50%',
      border: '2px solid #fff',
      outline: '2px solid #234',
      cursor: 'pointer',
      position: 'relative'
    },
    buttonStyle: {
      minWidth: `${iconSize}px`,
      minHeight: `${iconSize}px`,
      maxWidth: `${iconSize}px`,
      maxHeight: `${iconSize}px`,
      display: 'grid',
      placeItems: 'center',
      margin: 0,
      padding: 0
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
      {isLoading ? (
        <div
          style={{
            width: mediumScreen ? '100vw' : '80px',
            height: mediumScreen ? '70px' : '100vh',
            display: 'grid',
            placeItems: 'center'
          }}
        >
          <Loader />
        </div>
      ) : (
        <DraggableBox orientation={mediumScreen ? 'horizontal' : 'vertical'}>
          <Box sx={style.itemsBox}>
            {teams?.map(team => {
              return (
                <Box key={team._id} className='child' sx={style.cardStyle}>
                  <Button
                    onClick={() => {
                      handlePickedTeam(team._id, team.name)
                    }}
                    sx={style.buttonStyle}
                  >
                    {team.teamImage ? (
                      <Image
                        src={converToImage(team?.teamImage)}
                        alt={`${team.name} Team Picture`}
                        layout='fill'
                        objectFit='cover'
                        quality={100}
                      />
                    ) : (
                      <NoImage />
                    )}
                  </Button>
                </Box>
              )
            })}
          </Box>
        </DraggableBox>
      )}
    </Box>
  )
}
