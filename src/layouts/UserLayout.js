// ** import MUI
import Box from '@mui/material/Box'

// ** import Pre Comp
import Aside from 'src/@core/MUI/Aside'
import Main from 'src/@core/MUI/Main'
import Section from 'src/@core/MUI/Section'

// ** import Comp
import HeaderHandler from 'src/@core/layoutsBlocks/HeaderHandler/index'
import DropMenu from 'src/@core/layoutsBlocks/DropMenu/index'
import Logo from 'src/@core/layoutsBlocks/Logo/index'
import ScrollToTop from 'src/@core/layoutsBlocks/ScrollToTheTop'

// ** import Settings
import themeConfig from 'src/configs/themeConfig'
import { useTheme } from '@mui/material/styles'

// ** import Methode
import width from 'src/utils/styles/width'
import height from 'src/utils/styles/height'

export default function UserLayout({ children }) {
  // ** Hook
  const theme = useTheme()

  const sectionStyle = { display: 'flex', flexDirection: { xs: 'column', md: 'row' } }

  const asideStyle = {
    position: { xs: 'static', md: 'sticky' },
    left: 0,
    top: 0,
    zIndex: 99,
    background: theme.palette.background.primary,
    ...width({ xs: '100vw', md: '80px' }),
    ...height({ md: '100vh', xs: '56px' }),
    display: 'flex',
    flexDirection: { xs: 'row', md: 'column' },
    alignItems: 'center',
    padding: { xs: '0 1rem', md: '1rem 0' },
    justifyContent: 'space-between',
    borderRight: { xs: '0', md: `1px solid ${theme.palette.border}` },
    borderBottom: { xs: `1px solid ${theme.palette.border}`, md: '0' }
  }

  return (
    <Section sx={sectionStyle}>
      <Aside sx={asideStyle}>
        <Box sx={{ width: '100%', height: '50px', display: { xs: 'none', md: 'grid' }, placeItems: 'center' }}>
          <Logo {...themeConfig.navBrandLogo} />
        </Box>
        <Box sx={{ width: '100%' }}>
          <HeaderHandler />
        </Box>
        <Box>
          <DropMenu />
        </Box>
      </Aside>
      <Main sx={{ maxWidth: { xs: '100%', md: 'calc(100% - 80px)' }, width: '100%' }}>{children}</Main>
      <ScrollToTop />
    </Section>
  )
}
