import { useRef } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import CopyIcon from 'public/icons/CopyIcon'

export default function TeamAddLink({ teamId, link }) {
  const inputT = useRef(null)

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
        Group Invite Link
      </Box>
      <Box className='desc'>This link can be shared with your friends to invite them to join your group</Box>
      <Box className='input' sx={inputStyle}>
        <TextField
          ref={inputT}
          variant='standard'
          sx={{ flexGrow: 1, height: '40px', outline: 'none', padding: '.25rem .5rem' }}
          disabled
          InputProps={{
            disableUnderline: true // <== added this
          }}
          value={`${process.env.NEXT_PUBLIC_CLIENT_URL}/teams/addteam/${link}`}
        />
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
            /* Get the text field */
            let copyText = inputT.current.childNodes[0].childNodes[0]

            /* Copy the text inside the text field */
            navigator.clipboard.writeText(copyText.value)
          }}
        >
          <CopyIcon />
        </IconButton>
      </Box>
    </Box>
  )
}
