// ** import from MUI
import Box from '@mui/material/Box'

export default function Article({ children, sx }) {
  return (
    <Box sx={sx} component='article'>
      {children}
    </Box>
  )
}
