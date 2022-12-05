// ** MUI Imports
import Box from '@mui/material/Box'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'

// **
import useNewId from 'src/utils/hooks/useNewId'

export default function WRCSForm({ classData, setClassData }) {
  const { randomId } = useNewId()
  let newTaskArr = classData.tasks.map(task => {
    return { ...task }
  })

  return (
    <div className='Tasks_Handler'>
      {classData.tasks.length ? (
        classData.tasks?.map(task => {
          return (
            <article
              className='Task_Card'
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                marginBlock: '.5rem',
                border: '1px solid #edf2f4',
                borderRadius: '10px',
                padding: '.75rem'
              }}
            >
              <header
                className='Task_Header'
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
              >
                <h3>{`Task ${classData.tasks.indexOf(task) + 1}`}</h3>
                <Button
                  aria-label={`close Task ${classData.tasks.indexOf(task)}`}
                  onClick={() => {
                    let newTasks = [...classData.tasks].filter(el => el.id != task.id)
                    setClassData({
                      ...classData,
                      tasks: newTasks
                    })
                  }}
                >
                  Close
                </Button>
              </header>

              <main className='Task_Main' style={{ overflow: 'hidden' }}>
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    gap: '10px',
                    marginBottom: '10px'
                  }}
                >
                  <Box sx={{ width: '100%' }}>
                    <TextField
                      id='taskName'
                      label='Task Name'
                      type='text'
                      sx={{ width: '100%', padding: 0 }}
                      variant='standard'
                      value={newTaskArr.find(a => a.id == task.id).taskName}
                      onInput={e => {
                        newTaskArr.find(a => a.id == task.id).taskName = `${e.target.value}`
                        setClassData({
                          ...classData,
                          tasks: newTaskArr
                        })
                      }}
                    />
                  </Box>
                  <Box sx={{ width: '100%' }}>
                    <TextField
                      id='taskPurpose'
                      label='Task Purpose'
                      type='text'
                      sx={{ width: '100%' }}
                      variant='standard'
                      value={newTaskArr.find(a => a.id == task.id).purpose}
                      onInput={ev => {
                        newTaskArr.find(a => a.id == task.id).purpose = `${ev.target.value}`
                        setClassData({
                          ...classData,
                          tasks: newTaskArr
                        })
                      }}
                    />
                  </Box>
                  <Box sx={{ width: '100%' }}>
                    <TextField
                      id='taskRepeat'
                      label='Task Repeat'
                      type='number'
                      sx={{ width: '100%' }}
                      variant='standard'
                      value={newTaskArr.find(a => a.id == task.id).repeat}
                      onInput={e => {
                        newTaskArr.find(a => a.id == task.id).repeat = e.target.value
                        setClassData({
                          ...classData,
                          tasks: newTaskArr
                        })
                      }}
                    />
                  </Box>
                  {newTaskArr.find(a => a.id == task.id).steps.length ? (
                    newTaskArr
                      .find(a => a.id == task.id)
                      .steps.map(step => {
                        return (
                          <div key={`${task.id}${step.id}`} style={{ width: '100%', padding: '1rem' }}>
                            <header
                              className='Step_Header'
                              style={{
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <h4>{`Step ${newTaskArr.find(a => a.id == task.id).steps.indexOf(step) + 1}`}</h4>
                              <Button
                                aria-label='settings'
                                onClick={() => {
                                  newTaskArr.find(a => a.id == task.id).steps = [
                                    ...newTaskArr.find(a => a.id == task.id).steps
                                  ].filter(el => el.id != step.id)

                                  //
                                  setClassData({
                                    ...classData,
                                    tasks: newTaskArr
                                  })
                                }}
                              >
                                Delete Step
                              </Button>
                            </header>

                            <main style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                              <Box sx={{ width: '100%' }}>
                                <FormControl fullWidth>
                                  <InputLabel id={'StepType'} variant='standard'>
                                    Step Type
                                  </InputLabel>
                                  <Select
                                    variant='standard'
                                    labelId='StepType'
                                    id='StepType'
                                    value={
                                      newTaskArr.find(a => a.id == task.id).steps.find(el => el.id == step.id).stepType
                                    }
                                    onChange={em => {
                                      newTaskArr
                                        .find(a => a.id == task.id)
                                        .steps.find(el => el.id == step.id).stepType = em.target.value
                                      setClassData({
                                        ...classData,
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
                              </Box>
                              <Box sx={{ width: '100%' }}>
                                <TextField
                                  id='stepTime'
                                  label='Step Time (min)'
                                  type='number'
                                  sx={{ width: '100%' }}
                                  variant='standard'
                                  value={
                                    newTaskArr.find(a => a.id == task.id).steps.find(el => el.id == step.id).stepTime
                                  }
                                  onChange={em => {
                                    newTaskArr.find(a => a.id == task.id).steps.find(el => el.id == step.id).stepTime =
                                      em.target.value
                                    setClassData({
                                      ...classData,
                                      tasks: newTaskArr
                                    })
                                  }}
                                />
                              </Box>
                            </main>
                          </div>
                        )
                      })
                  ) : (
                    <></>
                  )}
                </div>

                <Button
                  onClick={() => {
                    //
                    newTaskArr.find(a => a.id == task.id).steps = [
                      ...newTaskArr.find(a => a.id == task.id).steps,
                      {
                        id: randomId,
                        stepType: '',
                        stepTime: 0
                      }
                    ]

                    //
                    setClassData({
                      ...classData,
                      tasks: newTaskArr
                    })
                  }}
                  sx={{ margin: '5px 0', width: '100%' }}
                  variant='outlined'
                >
                  Add Step
                </Button>
              </main>
            </article>
          )
        })
      ) : (
        <></>
      )}
    </div>
  )
}
