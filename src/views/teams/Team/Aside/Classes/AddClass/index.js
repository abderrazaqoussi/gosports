import React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import Grid from '@mui/material/Grid'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'

//
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker'

export default function index({ setIsOpen }) {
  const initialClassData = {
    title: '',
    sport: '',
    athletes: [],
    date: new Date(),
    description: '',
    tasks: []
  }

  const [classData, setClassData] = useState(initialClassData)
  const [athletes, setAthletes] = useState([])
  const athletesList = ['Ali', 'Omar', 'Mohamed', 'Pop']

  const handleChange = event => {
    const value = event.target.value

    if (value[value.length - 1] === 'all') {
      setAthletes(athletes.length === athletesList.length ? [] : athletesList)

      return
    }
    setSeanceData({ ...seanceData, athletes: value })
  }

  function handleData(e) {
    e.preventDefault()
    console.log(classData)
  }

  return (
    <>
      <Button
        sx={{ width: '100%' }}
        onClick={() => {
          setIsOpen(false)
        }}
        variant='contained'
      >
        Back
      </Button>
      <form onSubmit={handleData}>
        <Box>
          {' '}
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6}>
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
            </Grid>
            <Grid item xs={12} sm={6}>
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
            </Grid>
            <Grid item xs={12} sm={6}>
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
            </Grid>
            <Grid item xs={12} sm={6}>
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
            </Grid>
            <Grid item xs={12} sm={6}>
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
                  onChange={handleChange}
                  renderValue={athletes => athletes.join(', ')}
                >
                  {athletesList.map(e => {
                    return (
                      <MenuItem key={athletesList.indexOf(e)} value={e}>
                        {e}
                      </MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
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
            </Grid>
          </Grid>
        </Box>
        <Box></Box>
        <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
          Submit
        </Button>
      </form>
    </>
  )
}
