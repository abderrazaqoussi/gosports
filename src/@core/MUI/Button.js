// ** import from MUI
import Box from '@mui/material/Box'

export default function Button({ children, sx }) {
  return (
    <Box sx={sx} component='button'>
      {children}
    </Box>
  )
}
