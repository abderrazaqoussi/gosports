import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { teamPlannedWorkoutsByUserId } from 'src/utils/api/apisConfig'
import { useQuery } from 'react-query'
import useUserId from 'src/utils/hooks/useUserId'

export default function Index({ setIsOpen, teamId }) {
  const { data: userId } = useUserId()
  console.log('From Comp : ', userId, teamId)
  const { data, error, status } = useQuery(['Planned Workouts', `${teamId}`, `${userId}`], () =>
    teamPlannedWorkoutsByUserId(teamId, userId)
  )
  if (data) {
    console.log(data.data)
  }
  return (
    <>
      <Button
        sx={{ width: '100%' }}
        onClick={() => {
          setIsOpen(true)
        }}
        variant='contained'
      >
        Add Class
      </Button>
      <Box className='Model'>{'Planned Classes Here'}</Box>
    </>
  )
}
