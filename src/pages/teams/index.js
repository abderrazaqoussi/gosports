// ** import from MUI
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material'

import { useCookie } from 'next-cookie'
import parseJwt from 'src/utils/cookies/parseJwt'

// ** import Comps
import AsideNavBar from 'src/views/teams/TeamsAsideBar'
import TeamsBG from 'public/images/teamsBG'
import { useQuery } from 'react-query'
import { getTeamsByID } from 'src/utils/api/apisConfig'

export default function Groups({ userId }) {
  const theme = useTheme()
  const { data, error, isLoading } = useQuery(['Teams', userId], () => getTeamsByID(userId), {
    onSuccess: data => {
      data?.data.forEach(e => {
        // cookies.set(`${e?.name.replace(/\s+/g, '').toLowerCase()}`, e?._id)
      })
    }
  })

  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      <AsideNavBar teams={data?.data} userId={userId} />
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
        <TeamsBG />
        <Box sx={{ width: '50%', textAlign: 'center' }}>
          <Box sx={{ fontSize: '2rem', fontWeight: 600, color: theme.palette.text.default }}>Go Sports</Box>
          <Box sx={{ fontSize: '.9rem', color: theme.palette.text.primary }}>
            Join a team and get your next class, take the class and get review from your coach and teammates.
          </Box>
        </Box>
      </Box>
    </Box>
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
