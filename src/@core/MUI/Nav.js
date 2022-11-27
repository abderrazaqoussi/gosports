// ** import from MUI
import Box from '@mui/material/Box'

export default function Nav({ children, sx }) {
  return (
    <Box sx={sx} component='nav'>
      {children}
    </Box>
  )
}
