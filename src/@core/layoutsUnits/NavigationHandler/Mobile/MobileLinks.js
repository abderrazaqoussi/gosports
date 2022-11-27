// ** import MUI
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'

export default function MobileLinks({ data, active }) {
  // ** Hooks
  const theme = useTheme()

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        padding: '.75rem 1.25rem',
        display: 'flex',
        background: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'left',
        borderLeft: `6px solid ${theme.palette.border}`,
        gap: '15px',
        '& svg': {
          fill: `${active ? theme.palette.svg.default : theme.palette.svg.disabled}`,
          width: '25px',
          height: '25px'
        },
        '&:hover': {
          background: theme.palette.border
        }
      }}
    >
      <Box sx={{ height: '100%', display: 'grid', placeItems: 'center' }}>
        <data.icon />
      </Box>
      <Box
        sx={{
          display: 'grid',
          placeItems: 'center',
          fontSize: '1.25rem'
        }}
      >
        {data.title}
      </Box>
    </Box>
  )
}
