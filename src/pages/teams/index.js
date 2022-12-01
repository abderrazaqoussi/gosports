// ** import from MUI
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material'
import Head from 'next/head'

import { useCookie } from 'next-cookie'
import parseJwt from 'src/utils/cookies/parseJwt'

// ** import Comps
import AsideNavBar from 'src/views/teams/TeamsAsideBar'
import TeamsBG from 'public/images/teamsBG'
import { useQuery } from 'react-query'
import { getTeamsByID } from 'src/utils/api/apisConfig'

export default function Groups({ userId }) {
  const theme = useTheme()
  const { data, error, isLoading, isSuccess, isError } = useQuery(['Teams', userId], () => getTeamsByID(userId))

  return (
    <>
      <Head>
        <title>GoSports : Teams</title>
      </Head>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
        <AsideNavBar teams={isSuccess ? data.data : null} isLoading={isLoading} userId={userId} />
        <Box
          sx={{
            width: '100%',
            minHeight: { xs: '500px', md: '100%' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            userSelect: 'none',
            '& svg': {
              width: '40%',
              height: '40%'
            }
          }}
        >
          {!isSuccess || (isSuccess && data.data) ? (
            <>
              <TeamsBG />
              <Box sx={{ width: '50%', textAlign: 'center' }}>
                <Box sx={{ fontSize: '2rem', fontWeight: 600, color: theme.palette.text.default }}>Go Sports</Box>
                <Box sx={{ fontSize: '.9rem', color: theme.palette.text.primary }}>
                  Discover your teams and get your next class, take the class and get review from your coach and
                  teammates.
                </Box>
              </Box>
            </>
          ) : (
            <div style={{ width: '60%', textAlign: 'center' }}>
              You are not part of any team, try to create or join a team and get your next class, take the class and get
              review from your coach and teammates.
            </div>
          )}
        </Box>
      </Box>
    </>
  )
}

export async function getServerSideProps(context) {
  const cookies = useCookie(context)
  const jwt = cookies.get('jwt')
  if (!jwt) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false
      }
    }
  }

  const userId = parseJwt(jwt).id

  return {
    props: { userId }
  }
}
