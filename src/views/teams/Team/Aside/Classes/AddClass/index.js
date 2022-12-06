// ** Import from React
import { useState } from 'react'

// ** import from MUI
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'

// ** Import from X Date
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker'

// ** import Utiles
import removeAllDuplicatedObjects from 'src/utils/arrays/removeAllDuplicatedObjects'
import useNewId from 'src/utils/hooks/useNewId'
import { getUserById, addSession } from 'src/utils/api/apisConfig'
import { useQueries, useMutation } from 'react-query'
import useUserId from 'src/utils/hooks/useUserId'

import WRCSForm from './WRCSForm'

export default function index({ setIsOpen, members, teamId }) {
  // Variables
  const initialClassData = {
    title: '',
    sport: '',
    athletes: [],
    date: new Date(),
    description: '',
    tasks: []
  }

  // Hooks
  const { data: userId } = useUserId()
  const handlePostClass = useMutation(addSession)
  const [classData, setClassData] = useState(initialClassData)
  const [athletes, setAthletes] = useState([])
  const { randomId } = useNewId()
  const usersData = useQueries(
    members.map(user => {
      return {
        queryKey: ['user', user.id],
        queryFn: () => getUserById(user.id)
      }
    })
  )

  // Methodes
  const handleSelectAthletesChange = event => {
    const value = removeAllDuplicatedObjects(event.target.value)

    if (value[value.length - 1] === 'all') {
      setAthletes(athletes.length === athletesList.length ? [] : athletesList)

      return
    }
    setClassData({ ...classData, athletes: value })
  }

  function handleData(e) {
    e.preventDefault()
    let teamData = new FormData()
    teamData.append('name', name)
    // console.log({ teamId: `${teamId}`, createdBy: `${userId}`, ...classData })
    handlePostClass.mutate(JSON.stringify({ teamId: `${teamId}`, createdBy: `${userId}`, ...classData }))
  }

  // Style
  const style = {
    buttonStyle: { width: '100%' }
  }

  return (
    <>
      <Button
        sx={style.buttonStyle}
        onClick={() => {
          setIsOpen(false)
        }}
        variant='contained'
      >
        Back
      </Button>
      <form onSubmit={handleData} style={{ width: '100%' }}>
        <Box
          sx={{
            padding: '.5rem .25rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            maxWidth: '100%',
            width: '100%'
          }}
        >
          <div style={{ width: '100%' }}>
            <TextField
              required
              id='outlined-search'
              label='Title'
              type='text'
              sx={{ width: '100%' }}
              variant='standard'
              value={classData.title}
              onInput={e => {
                setClassData({ ...classData, title: e.target.value })
              }}
            />
          </div>
          <div style={{ width: '100%' }}>
            <FormControl fullWidth>
              <InputLabel id={'Sport'} variant='standard'>
                Sport
              </InputLabel>

              <Select
                required
                defaultValue=''
                variant='standard'
                labelId='Sport'
                id='Sport'
                label='Sport'
                value={classData.sport}
                onChange={e => {
                  setClassData({ ...classData, sport: e.target.value })
                }}
              >
                <MenuItem value={'Walking'}>Walking</MenuItem>
                <MenuItem value={'Running'}>Running</MenuItem>
                <MenuItem value={'Cycling'}>Cycling</MenuItem>
                <MenuItem value={'Swimming'}>Swimming</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div style={{ width: '100%' }}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <MobileDatePicker
                label='Start Date'
                inputFormat='dd/MM/yyyy'
                renderInput={params => <TextField {...params} sx={{ width: '100%' }} variant='standard' />}
                value={classData.date}
                onChange={e => {
                  setClassData({ ...classData, date: new Date(e) })
                }}
              />
            </LocalizationProvider>
          </div>
          <div style={{ width: '100%' }}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <MobileTimePicker
                label='Start Time'
                renderInput={params => <TextField {...params} sx={{ width: '100%' }} variant='standard' />}
                value={classData.date}
                onChange={e => {
                  const newDate = classData.date
                  newDate.setHours(new Date(e).getHours())
                  newDate.setMinutes(new Date(e).getMinutes())
                  setClassData({ ...classData, date: new Date(newDate) })
                }}
              />
            </LocalizationProvider>
          </div>
          <div style={{ width: '100%' }}>
            <FormControl fullWidth>
              <InputLabel id='selectMultipleAthlete' variant='standard'>
                Athlete
              </InputLabel>
              <Select
                required
                variant='standard'
                multiple
                defaultValue=''
                id='selectMultipleAthlete'
                labelId='selectMultipleAthlete'
                value={classData.athletes}
                onChange={handleSelectAthletesChange}
                renderValue={athletes => {
                  let renderedValues = []
                  athletes.map(e => renderedValues.push(e.name))
                  return renderedValues.join(', ')
                }}
              >
                {usersData.map(userData => {
                  if (userData.isSuccess) {
                    return (
                      <MenuItem
                        key={usersData.indexOf(userData)}
                        value={{ name: userData.data.data.name, id: userData.data.data._id }}
                        sx={{ display: 'flex', gap: '10px' }}
                      >
                        <Avatar
                          src={userData.data.data.image}
                          alt='Remy Sharp'
                          referrerPolicy='no-referrer'
                          sx={{ maxWidth: '20px', maxHeight: '20px' }}
                        />
                        <div
                          style={{
                            display: 'grid',
                            placeItems: 'center',
                            maxWidth: '60%',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          {userData.data.data.name}
                        </div>
                      </MenuItem>
                    )
                  }
                })}
              </Select>
            </FormControl>
          </div>
          <div style={{ width: '100%' }}>
            <TextField
              id='standard-multiline-static'
              label='Description'
              placeholder='Share more about your activity'
              multiline
              rows={5}
              sx={{ width: '100%' }}
              variant='standard'
              value={classData.description}
              onInput={e => {
                setClassData({ ...classData, description: e.target.value })
              }}
            />
          </div>
        </Box>

        <WRCSForm classData={classData} setClassData={setClassData} />
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}
        >
          <Button
            onClick={() => {
              const newTasks = [
                ...classData.tasks,
                {
                  id: randomId,
                  taskName: '',
                  purpose: '',
                  repeat: 0,
                  steps: []
                }
              ]

              //
              setClassData({
                ...classData,
                tasks: newTasks
              })
            }}
            sx={style.buttonStyle}
            variant='contained'
          >
            Add Task
          </Button>
          <Button type='submit' sx={style.buttonStyle} variant='contained'>
            Submit
          </Button>
        </div>
      </form>
    </>
  )
}
