// ** import from React
import { useState } from 'react'

// ** import from next
import Link from 'next/link'
import { useRouter } from 'next/router'
import MobileLinks from './MobileLinks'

// ** import Html Att
import Button from '@mui/material/Button'
import Header from 'src/@core/MUI/Header'

// ** import Components
import Nav from 'src/@core/MUI/Nav'

// ** import Icons
import MenuIcon from 'public/icons/MenuIcon'

// ** import Settings
import navigation from 'src/navigation'

// ** import Utils
import width from 'src/utils/styles/width'
import height from 'src/utils/styles/height'
import { Box } from '@mui/material'

// ** import from MUI
import { useTheme } from '@mui/material/styles'

// ** import Settings
import { handleURLQueries } from '../handleURLQueries'
import themeConfig from 'src/configs/themeConfig'

export default function MobileNav() {
  const [isNavHidden, setIsNavHidden] = useState(true)

  // ** Hook
  const theme = useTheme()
  const router = useRouter()

  // ** Methodes
  const isNavLinkActive = item => {
    if (router.pathname === item.path || handleURLQueries(router, item.path)) {
      return true
    } else {
      return false
    }
  }

  // ** set Styles
  const mobileNavStyle = {
    width: themeConfig.navigationSize,
    background: theme.palette.background.primary,
    display: { xs: 'flex', md: 'none' },
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '5px'
  }

  const linkStyle = {
    width: '100%',
    padding: '.5rem',
    '& svg': { width: '23px', height: '23px' },
    display: 'grid',
    placeItems: 'center'
  }

  return (
    <Header sx={{ width: '100%', display: { xs: 'block', md: 'none' } }}>
      <Button
        aria-label='nav button'
        sx={{
          display: 'grid',
          placeItems: 'center',
          ...width('40px'),
          ...height('40px'),
          borderRadius: '50%',
          '& svg': {
            width: '17px',
            height: '17px'
          },
          cursor: 'pointer',
          background: theme.palette.background.default,
          '&:hover': {
            background: `${theme.palette.background.default}CC`
          }
        }}
        onClick={() => {
          const body = document.getElementById('__next')
          body.style.height = !isNavHidden ? 'auto' : '100vh'
          body.style.overflow = !isNavHidden ? 'auto' : 'hidden'
          setIsNavHidden(!isNavHidden)
        }}
      >
        <MenuIcon />
      </Button>
      <Box
        sx={{
          display: `${isNavHidden ? 'none' : 'grid'}`,
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: isNavHidden ? 'auto' : '100vh',
          background: `${theme.palette.background.primary}4D`,
          placeItems: 'left'
        }}
        onClick={() => {
          const body = document.getElementById('__next')
          body.style.height = !isNavHidden ? 'auto' : '100vh'
          body.style.overflow = !isNavHidden ? 'auto' : 'hidden'
          setIsNavHidden(true)
        }}
      >
        <Nav sx={mobileNavStyle}>
          {navigation().map(e => {
            return (
              <Link key={e.id} href={e.path}>
                <Box aria-label={`${e.title} page link`} component={'a'} sx={linkStyle} href={e.path}>
                  <MobileLinks data={e} active={isNavLinkActive(e)} />
                </Box>
              </Link>
            )
          })}
        </Nav>
      </Box>
    </Header>
  )
}
