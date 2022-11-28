// ** React Imports
import { useEffect, useState } from 'react'

import SeanceForm from './SeanceForm'

import CreateTask from './TaskForm'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import CardHeader from '@mui/material/CardHeader'
import CardActions from '@mui/material/CardActions'

export default function Index({ setMain }) {
  const [seanceData, setSeanceData] = useState({
    title: '',
    sport: '',
    athletes: [],
    date: new Date(),
    description: '',
    tasks: []
  })
  function handleData(e) {
    e.preventDefault()
    console.log(seanceData)
  }

  return (
    <>
      <form onSubmit={handleData}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <SeanceForm seanceData={seanceData} setSeanceData={setSeanceData} />
          </Grid>
          {seanceData.tasks.length ? (
            seanceData.tasks.map(e => {
              return (
                <Grid item xs={12} sx={{ boxShadow: 'none' }}>
                  <Card>
                    <CardHeader
                      title='Task Details'
                      titleTypographyProps={{ variant: 'h6' }}
                      action={
                        <Button
                          aria-label='settings'
                          onClick={() => {
                            let newTasks = [...seanceData.tasks].filter(el => el.id != e.id)
                            setSeanceData({
                              ...seanceData,
                              tasks: newTasks
                            })
                          }}
                        >
                          Close
                        </Button>
                      }
                    />
                    <CreateTask key={e.id} index={e.id} seanceData={seanceData} setSeanceData={setSeanceData} />
                  </Card>
                </Grid>
              )
            })
          ) : (
            <></>
          )}
          <Grid item xs={12}>
            <Card>
              <CardActions>
                <Button
                  onClick={() => {
                    const tasksArray = [
                      ...seanceData.tasks,
                      {
                        id: uuid(),
                        taskName: '',
                        purpose: '',
                        repeat: 0,
                        steps: []
                      }
                    ]

                    //
                    setSeanceData({
                      ...seanceData,
                      tasks: tasksArray
                    })
                  }}
                  size='large'
                  sx={{ mr: 2 }}
                  variant='contained'
                >
                  Add Task
                </Button>
                <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
                  Submit
                </Button>
                <Button
                  size='large'
                  color='secondary'
                  variant='outlined'
                  onClick={() => {
                    setSeanceData({
                      title: '',
                      sport: '',
                      athletes: [],
                      date: new Date(),
                      description: '',
                      tasks: []
                    })
                    setMain('main')
                  }}
                >
                  Cancel
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </form>
    </>
  )
}
