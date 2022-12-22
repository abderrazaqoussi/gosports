// ** import from MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function stat({ data }) {
  const containerStyle = {
    height: '300px',
    padding: '1rem 1rem',
    paddingTop: { xs: '30px', sm: '40px', md: '50px', lg: '60px' }
  }

  return (
    <Box sx={containerStyle}>
      <Typography className='title' variant='h4' sx={{ textAlign: 'center' }}>
        {data.name}
      </Typography>
      <Box></Box>
    </Box>
  )
}
