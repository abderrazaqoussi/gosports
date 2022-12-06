import Box from '@mui/material/Box'
import { RecordedSessions } from 'src/utils/api/apisConfig'
import { useQueries } from 'react-query'
import Card from './MapCard'

export default function Index({ team }) {
  const handleMembersRecordedClasses = useQueries(
    team.members.map(user => {
      return {
        queryKey: ['classes', user.id],
        queryFn: () => RecordedSessions(user.id)
      }
    })
  )
  console.log({ team, from: 'main' })
  return (
    <Box
      sx={{
        padding: '1rem .5rem',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '15px'
      }}
    >
      {handleMembersRecordedClasses.map(userClassesData => {
        if (userClassesData.isSuccess) {
          return userClassesData?.data?.data?.map(activity => {
            return (
              <Box
                key={`${handleMembersRecordedClasses.indexOf(userClassesData)}${userClassesData.data.data.indexOf(
                  activity
                )}`}
                sx={{ width: '100%', maxWidth: '400px', background: '#fff' }}
              >
                <Card mapData={activity} />
              </Box>
            )
          })
        }
      })}
    </Box>
  )
}
