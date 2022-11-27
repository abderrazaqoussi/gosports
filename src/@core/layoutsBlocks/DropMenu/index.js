// ** import from React
import { useState, useEffect } from 'react'
import Image from 'next/image'

// ** MUI Imports
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material'

// ** Icons Imports
import ModeToggler from 'src/@core/layoutsUnits/ModeToggler/index'
import SignOutBtn from 'src/@core/layoutsUnits/DropMenu/SignOutBtn'
import { useQuery } from 'react-query'

import { getProfile } from 'src/utils/api/apisConfig'

// ** OAuth
// import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import useId from 'src/utils/hooks/useUserId'

export default function DropMenu({}) {
  const { data: userIdData } = useId()

  const { data, error } = useQuery('Profile', () => getProfile, { enabled: Boolean(userIdData) })

  // ** States
  const [anchorEl, setAnchorEl] = useState(null)

  // ** Hooks
  const router = useRouter()
  const theme = useTheme()

  const mediumScreen = useMediaQuery(theme => theme.breakpoints.down('md'))

  const anchorOrigin = mediumScreen
    ? { vertical: 'bottom', horizontal: 'right' }
    : { vertical: 'top', horizontal: 'left' }

  const transformOrigin = mediumScreen
    ? { vertical: 'bottom', horizontal: 'right' }
    : { vertical: 'top', horizontal: 'left' }

  // **
  const handleDropdownOpen = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleDropdownClose = url => {
    if (url) {
      router.push(url)
    }
    setAnchorEl(null)
  }

  const styles = {
    py: 2,
    px: 4,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    color: 'text.primary',
    textDecoration: 'none'
  }

  return (
    <>
      <button
        style={{ display: 'grid', alignItems: 'center', cursor: 'pointer', borderRadius: '50%', overflow: 'hidden' }}
        onClick={handleDropdownOpen}
        aria-label={'profile menu button'}
      >
        {data?.user ? (
          <Image src={data.user?.image} alt='Profil' height={'50px'} width={'50px'} referrerPolicy='no-referrer' />
        ) : (
          <div style={{ width: '50px', height: '50px', borderRadius: '50%', display: 'grid', placeItems: 'center' }}>
            {data?.user.name[0]}
          </div>
        )}
      </button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleDropdownClose()}
        sx={{
          borderRadius: '0',

          '& ul': {
            borderRadius: '0',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          },
          '& .MuiMenu-paper': {
            background: theme.palette.background.primary,
            width: 230,
            marginLeft: { xs: 0, md: 14 },
            marginTop: { xs: 10, md: 0 },
            borderRadius: 0,
            zIndex: 99
          }
        }}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
      >
        {/* <MenuItem sx={{ p: 0 }} onClick={() => handleDropdownClose('/profile')}>
          <Box sx={styles}>Profile</Box>
        </MenuItem> */}
        <MenuItem sx={{ p: 0, borderBottom: '#222' }}>
          <ModeToggler />
        </MenuItem>
        <MenuItem sx={{ p: 0 }}>
          <SignOutBtn handleDropdownClose={handleDropdownClose} />
        </MenuItem>
      </Menu>
    </>
  )
}
