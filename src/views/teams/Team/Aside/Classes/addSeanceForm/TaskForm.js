// ** React Imports

import { v4 as uuid } from 'uuid'

// ** MUI Imports
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'

export default function CreateTask({ seanceData, setSeanceData, index }) {
  let newTaskArr = seanceData.tasks.map(a => {
    return { ...a }
  })

  return (
    <>
      <CardContent sx={{ minHeight: 200, display: 'flex', alignItems: 'start', justifyContent: 'center' }}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <TextField
              id='taskName'
              label='Task Name'
              type='text'
              sx={{ width: '100%' }}
              variant='standard'
              value={newTaskArr.find(a => a.id == index).taskName}
              onInput={e => {
                newTaskArr.find(a => a.id == index).taskName = `${e.target.value}`
                setSeanceData({
                  ...seanceData,
                  tasks: newTaskArr
                })
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='taskPurpose'
              label='Task Purpose'
              type='text'
              sx={{ width: '100%' }}
              variant='standard'
              value={newTaskArr.find(a => a.id == index).purpose}
              onInput={e => {
                newTaskArr.find(a => a.id == index).purpose = `${e.target.value}`
                setSeanceData({
                  ...seanceData,
                  tasks: newTaskArr
                })
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='taskRepeat'
              label='Task Repeat'
              type='number'
              sx={{ width: '100%' }}
              variant='standard'
              value={newTaskArr.find(a => a.id == index).repeat}
              onInput={e => {
                newTaskArr.find(a => a.id == index).repeat = e.target.value
                setSeanceData({
                  ...seanceData,
                  tasks: newTaskArr
                })
              }}
            />
          </Grid>
          {newTaskArr.find(a => a.id == index).steps.length ? (
            newTaskArr
              .find(a => a.id == index)
              .steps.map(e => {
                return (
                  <Grid key={e.id} item xs={12}>
                    <Grid item xs={12}>
                      <Divider />
                    </Grid>
                    <CardHeader
                      title={`Step : ${newTaskArr.find(a => a.id == index).steps.indexOf(e) + 1} `}
                      titleTypographyProps={{ variant: 'body2', fontSize: '0.5rem' }}
                      action={
                        <Button
                          aria-label='settings'
                          onClick={() => {
                            newTaskArr.find(a => a.id == index).steps = [
                              ...newTaskArr.find(a => a.id == index).steps
                            ].filter(el => el.id != e.id)

                            //
                            setSeanceData({
                              ...seanceData,
                              tasks: newTaskArr
                            })
                          }}
                        >
                          Delete Step
                        </Button>
                      }
                    />
                    <CardContent>
                      <Grid container spacing={5}>
                        <Grid item xs={12} md={6}>
                          <FormControl fullWidth>
                            <InputLabel id={'StepType'} variant='standard'>
                              Step Type
                            </InputLabel>
                            <Select
                              variant='standard'
                              labelId='StepType'
                              id='StepType'
                              value={newTaskArr.find(a => a.id == index).steps.find(el => el.id == e.id).stepType}
                              onChange={em => {
                                newTaskArr.find(a => a.id == index).steps.find(el => el.id == e.id).stepType =
                                  em.target.value
                                setSeanceData({
                                  ...seanceData,
                                  tasks: newTaskArr
                                })
                              }}
                              label='StepType'
                            >
                              <MenuItem value={'Warm Up'}>Warm Up</MenuItem>
                              <MenuItem value={'Run'}>Run</MenuItem>
                              <MenuItem value={'Recover'}>Recover</MenuItem>
                              <MenuItem value={'Rest'}>Rest</MenuItem>
                              <MenuItem value={'Cool Down'}>Cool Down</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField
                            id='stepTime'
                            label='Step Time (min)'
                            type='number'
                            sx={{ width: '100%' }}
                            variant='standard'
                            value={newTaskArr.find(a => a.id == index).steps.find(el => el.id == e.id).stepTime}
                            onChange={em => {
                              newTaskArr.find(a => a.id == index).steps.find(el => el.id == e.id).stepTime =
                                em.target.value
                              setSeanceData({
                                ...seanceData,
                                tasks: newTaskArr
                              })
                            }}
                          />
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Grid>
                )
              })
          ) : (
            <></>
          )}
        </Grid>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => {
            //
            newTaskArr.find(a => a.id == index).steps = [
              ...newTaskArr.find(a => a.id == index).steps,
              {
                id: uuid(),
                stepType: '',
                stepTime: 0
              }
            ]

            //
            setSeanceData({
              ...seanceData,
              tasks: newTaskArr
            })
          }}
          size='large'
          sx={{ mr: 2 }}
          variant='contained'
        >
          Add Step
        </Button>
      </CardActions>
    </>
  )
}
