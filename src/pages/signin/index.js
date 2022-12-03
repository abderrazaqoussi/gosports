// ** import from MUI
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// ** import Layout
import BlankLayout from 'src/layouts/BlankLayout'

// ** import Comp
import Logo from 'src/@core/layoutsBlocks/Logo/index'
import Header from 'src/@core/MUI/Header'
import Main from 'src/@core/MUI/Main'
import Footer from 'src/@core/MUI/Footer'

// ** import Settings
import themeConfig from 'src/configs/themeConfig'

// ** import icons
import GoogleIcon from 'public/icons/GoogleIcon'
import StravaIcon from 'public/icons/StravaIcon'

import * as cookie from 'cookie'

// ** import from Next
import Head from 'next/head'

export default function SignIn({ providers }) {
  return (
    <>
      <Head>
        <title>Sign in to Go Sports</title>
      </Head>
      <Box sx={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box
          className='card'
          sx={{
            width: { xs: '100vw', md: '50%', lg: '45%' },
            minWidth: { xs: '100vw', md: '50%', lg: '45%' },
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '15px'
          }}
        >
          <Header sx={{ display: 'grid', placeItems: 'center', height: '7rem' }}>
            <Logo {...themeConfig.navBrandLogo} Style={{ fontSize: '6rem' }} />
          </Header>
          <Main sx={{ display: 'grid', placeItems: 'center', marginBottom: '1rem' }}>
            <Typography sx={{ fontSize: '1.5rem', fontWeight: 600 }}>Welcome Back</Typography>
            <Typography sx={{ textAlign: 'center' }}>Let's get started</Typography>
          </Main>
          <Footer sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a href={`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/strava`}>
              <Button
                startIcon={<StravaIcon />}
                fullWidth
                sx={{
                  maxWidth: '280px',
                  background: '#fc4c01',
                  color: '#ffffff',
                  '& svg': { fill: '#fff' },
                  '&:hover': { background: '#fc4c01', color: '#ffffff', opacity: 0.8 }
                }}
              >
                {`Continue with Strava`}
              </Button>
            </a>
            <a href={`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/google`}>
              <Button
                startIcon={<GoogleIcon />}
                fullWidth
                sx={{
                  maxWidth: '280px',
                  background: '#1a73e8',
                  color: '#ffffff',
                  '& svg': { fill: '#fff' },
                  '&:hover': { background: '#1a73e8', color: '#ffffff', opacity: 0.8 }
                }}
              >
                {`Continue with Google`}
              </Button>
            </a>
          </Footer>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', md: 'grid' },
            placeItems: 'center',
            flexGrow: 1,
            height: '100%',
            backgroundImage: 'linear-gradient(to right bottom, #1b202a, #202632, #262c3a, #2b3342, #31394b)',
            color: '#fff',
            padding: '3.5rem',
            fontSize: { md: '2.5rem', lg: '3.05rem' },
            fontWeight: 600
          }}
        >
          {'Take your sport lifestyle to another level with a single click'}
        </Box>
      </Box>
    </>
  )
}

// ** Aplly Layout
SignIn.getLayout = page => <BlankLayout>{page}</BlankLayout>

export async function getServerSideProps(context) {
  const parsedCookies = context.req.headers.cookie ? cookie.parse(context.req.headers.cookie) : { jwt: '' }

  if (parsedCookies.jwt) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}
