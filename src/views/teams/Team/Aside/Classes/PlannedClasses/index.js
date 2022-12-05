import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

export default function Index({ setIsOpen }) {
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
