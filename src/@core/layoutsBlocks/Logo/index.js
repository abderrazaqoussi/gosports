// ** import Comp
import Box from '@mui/material/Box'

export default function index({ Logo, Type, Path, Style }) {
  // ** Styles
  const containerStyle = {
    transform: 'rotateZ(90deg)',
    display: 'grid',
    placeItems: 'center',
    width: 'max-content',
    height: 'max-content',
    color: '#363432',
    fontWeight: 600,
    fontSize: '2.2rem',
    color: '#FF731D',
    ...Style
  }

  return (
    <Box component='a' sx={containerStyle} href={Path}>
      {Type === 'text' ? Logo : <Logo />}
    </Box>
  )
}
