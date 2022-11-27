// ** import from next
import Link from 'next/link'
import { useRouter } from 'next/router'

// ** import Components
import Nav from 'src/@core/MUI/Nav'

import navigation from 'src/navigation'
import DescktopLinks from './DesktopLink'

// ** import from MUI
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'

// ** import Settings
import { handleURLQueries } from '../handleURLQueries'
import themeConfig from 'src/configs/themeConfig'

export default function DescktopNav() {
  const router = useRouter()
  const theme = useTheme()

  // ** Methodes
  const isNavLinkActive = item => {
    if (router.pathname === item.path || handleURLQueries(router, item.path)) {
      return true
    } else {
      return false
    }
  }

  const descktopNavStyle = {
    width: themeConfig.navigationSize,
    background: theme.palette.background.primary,
    display: { xs: 'none', md: 'flex' },
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
    <Nav sx={{ ...descktopNavStyle }}>
      {navigation().map(e => {
        return (
          <Link key={e.id} href={e.path}>
            <Box component={'a'} sx={linkStyle} href={e.path}>
              <DescktopLinks data={e} active={isNavLinkActive(e)} />
            </Box>
          </Link>
        )
      })}
    </Nav>
  )
}
