// ** import from React & next
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

// ** import from MUi
import Box from '@mui/material/Box'

// ** import Sections
const Aside = dynamic(() => import('src/views/teams/Team/Aside'), {
  ssr: false
})
const Main = dynamic(() => import('src/views/teams/Team/Main'), {
  ssr: false
})
import TeamsAsideBar from 'src/views/teams/TeamsAsideBar'
// import Main from 'src/views/teams/Team/Main'

// **
import { useQuery } from 'react-query'
import { getTeamsByID } from 'src/utils/api/apisConfig'
import { useCookie } from 'next-cookie'
import parseJwt from 'src/utils/cookies/parseJwt'

export default function index({ userId, teamId }) {
  const [thisTeam, setThisTeam] = useState(null)
  const { data, isLoading, isSuccess } = useQuery(['Teams', userId], () => getTeamsByID(userId))

  useEffect(() => {
    data?.data.forEach(e => {
      if (e._id === teamId) {
        setThisTeam(e)
      }
    })
  }, [teamId, data, userId])

  // Styles
  const style = {
    containerStyle: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' }
    },
    sectionStyle: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row-reverse' }
    }
  }

  return (
    <Box sx={style.containerStyle}>
      <TeamsAsideBar teams={isSuccess ? data.data : null} activeTeam={teamId} />
      {isSuccess && thisTeam ? (
        <Box sx={style.sectionStyle}>
          <Aside team={thisTeam} />
          <Box sx={{ display: { xs: 'none', md: 'flex' }, width: '100%' }}>
            <Main team={thisTeam} />
          </Box>
        </Box>
      ) : null}
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

  const { name } = context.params

  const teams = cookies.get('teams')
  if (!teams[name]) {
    return {
      redirect: {
        destination: '/teams',
        permanent: false
      }
    }
  }

  return {
    props: { userId, teamId: teams[name] }
  }
}
