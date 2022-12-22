import { useState } from 'react'
import Box from '@mui/material/Box'
import { teamRecordedWorkouts } from 'src/utils/api/apisConfig'
import { useQuery } from 'react-query'
import Card from './MinimalCard'
import DetailsCard from './DetailsCard'
import MinimalCard from './MinimalCard'

export default function Index({ team }) {
  const [pickData, setPickData] = useState(null)
  const { data, error, status } = useQuery(['Recorded Workouts', `${team._id}`], () => {
    return teamRecordedWorkouts(team._id)
  })
  if (data) {
    console.log(data.data[0].user, data.data[0].activities[0])
  }

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
      {pickData ? (
        <DetailsCard user={pickData?.user} activity={pickData?.activity} setPickData={setPickData} />
      ) : (
        <Box sx={{ width: '60%', marginInline: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {data
            ? data.data.map(sing => {
                return sing.activities.map(activity => {
                  return <MinimalCard user={sing.user} activity={activity} setPickData={setPickData} />
                })
              })
            : null}
        </Box>
      )}
    </Box>
  )
}
