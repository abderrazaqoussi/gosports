import { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import CameraIcon from 'public/icons/CameraIcon'
import useUserId from 'src/utils/hooks/useUserId'
import { useMutation } from 'react-query'
import { addTeam } from 'src/utils/api/apisConfig'
import { useRouter } from 'next/router'
import { useQueryClient } from 'react-query'
import { useCookie } from 'next-cookie'
import unifyingText from 'src/utils/strings/unifyingText'

export default function CreateTeam({ handleClose }) {
  const addNewTeam = useMutation(addTeam)
  const [imgSrc, setImgSrc] = useState(null)
  const [name, setName] = useState(null)
  const { data: userId } = useUserId()
  const queryClient = useQueryClient()
  const cookies = useCookie()
  const router = useRouter()
  const handleFileChange = e => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0]
    }
    setImgSrc(img)
  }
  const handleSubmit = async e => {
    e.preventDefault()
    let teamData = new FormData()
    teamData.append('name', name)
    teamData.append('owner', userId)
    teamData.append('teamImage', imgSrc.data)

    addNewTeam.mutate(teamData, {
      onSuccess: (data, error, variables, context) => {
        queryClient.setQueryData('teams', data)
        // console.log(data)
        let teams = cookies.get('teams')
        teams[unifyingText(data.data.name)] = data.data._id
        cookies.set(`teams`, JSON.stringify(teams))
        router.push(`teams/${unifyingText(data.data.name)}`)
      }
    })
  }

  return (
    <form
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '25px' }}
      onSubmit={handleSubmit}
    >
      <Typography variant='h5'>Customize your Team</Typography>
      <Typography variant='body2' sx={{ width: '100%', textAlign: 'center' }}>
        {`Give your new server a personality with a name and an icon. You can always change it later.`}
      </Typography>
      <IconButton
        sx={{
          maxWidth: '100px',
          maxHeight: '100px',
          minWidth: '100px',
          minHeight: '100px',
          border: theme => `${imgSrc ? '' : `dashed 2px ${theme.palette.text.primary}`}`,
          borderRadius: '50%',
          overflow: 'hidden'
        }}
        color='primary'
        aria-label='upload picture'
        component='label'
      >
        <input hidden accept='image/*' type='file' onChange={handleFileChange} />
        {imgSrc ? (
          <img src={`${imgSrc.preview}`} alt='random image' width='100px' height='100px' />
        ) : (
          <Box sx={{ display: 'grid', placeItems: 'center' }}>
            <CameraIcon />
            <Typography variant='body1' sx={{ fontSize: '1rem' }}>
              Upload
            </Typography>
          </Box>
        )}
      </IconButton>
      <TextField
        fullWidth
        id='standard-basic'
        label='Team Name'
        variant='standard'
        required
        onChange={e => {
          setName(e.target.value)
        }}
      />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Button
          variant='contained'
          onClick={() => {
            handleClose()
          }}
        >
          Exit
        </Button>
        <Button type='submit' variant='contained'>
          Create
        </Button>
      </Box>
    </form>
  )
}
