// ** import from MUI
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'

// ** import comp
import Map from './Map'
import Stat from './Stat'

export default function InfoCard({ user, activity, setPickData }) {
  const avatarStyle = {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: { xs: '50px', sm: '60px', md: '70px', lg: '80px' },
    maxWidth: { xs: '50px', sm: '60px', md: '70px', lg: '80px' },
    minHeight: { xs: '50px', sm: '60px', md: '70px', lg: '80px' },
    maxHeight: { xs: '50px', sm: '60px', md: '70px', lg: '80px' },
    boxShadow: '0px 8px 24px rgb(13 13 18 / 16%)'
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <Button
          onClick={() => {
            setPickData(null)
          }}
        >
          Back
        </Button>
      </Box>
      <Box sx={{ height: '250px' }}>
        <Map data={activity} />
      </Box>
      <Box sx={{ position: 'relative', zIndex: 1000, top: '-5px' }}>
        <Avatar sx={avatarStyle} src={user.image} />
        <Stat data={activity} />
      </Box>
    </Box>
  )
}
