import { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import CheckIcon from 'public/icons/CheckIcon'
import PencilIcon from 'public/icons/PencilIcon'
import { updateTeamName } from 'src/utils/api/apisConfig'
import { useMutation } from 'react-query'
import { useRouter } from 'next/router'
import { useCookie } from 'next-cookie'
import unifyingText from 'src/utils/strings/unifyingText'

export default function TeamName({ teamId, teamName, editable }) {
  const [modifying, setModifying] = useState(false)
  const [grpNam, setGrpName] = useState(teamName ? teamName : 'unTitled')
  const router = useRouter()
  const cookies = useCookie()

  const updateName = useMutation(data => {
    updateTeamName(teamId, data)
  })

  const submitName = () => {
    if (!modifying || grpNam === teamName) return
    // Send Req
    updateName.mutate(
      { name: grpNam },
      {
        onSuccess: async (data, error, variables, context) => {
          let teams = cookies.get('teams')
          let oldTeamName
          Object.keys(teams).forEach(element => {
            if (teams[element] === teamId) {
              oldTeamName = element
            }
          })
          delete teams[oldTeamName]
          teams[unifyingText(grpNam)] = teamId
          cookies.set(`teams`, JSON.stringify(teams))
          setTimeout(() => {
            return router.push(`teams/${unifyingText(grpNam)}`)
          }, 200)
        }
      }
    )
  }

  const containerStyle = {
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    borderRadius: '10px',
    padding: '1rem .75rem'
  }

  const inputStyle = {
    width: '100%',
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'center',
    border: '1px solid #edf2f4'
  }

  return (
    <Box sx={containerStyle}>
      <Box className='title' sx={{ fontSize: '1.2rem', fontWeight: 600 }}>
        Name
      </Box>
      <Box className='desc'>This is the group Name</Box>
      <Box className='input' sx={inputStyle}>
        <TextField
          variant='standard'
          sx={{ flexGrow: 1, height: '40px', outline: 'none', padding: '.25rem .5rem' }}
          disabled={!modifying}
          InputProps={{
            disableUnderline: true // <== added this
          }}
          value={grpNam}
          onChange={e => {
            setGrpName(e.target.value)
          }}
        />
        {editable ? (
          <IconButton
            sx={{
              maxWidth: '40px',
              minWidth: '40px',
              maxHeight: '40px',
              minHeight: '40px',
              borderRadius: 0,
              '& svg': { fill: '#8d99ae' }
            }}
            onClick={() => {
              setModifying(!modifying)
              submitName()
            }}
          >
            {modifying ? <CheckIcon /> : <PencilIcon />}
          </IconButton>
        ) : null}
      </Box>
    </Box>
  )
}
