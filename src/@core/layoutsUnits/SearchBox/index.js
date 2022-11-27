// ** import from MUi
import TextField from '@mui/material/TextField'

// ** import Icons
import SearchIcon from 'public/icons/SearchIcon'

export default function SearchBox() {
  // ** Styles
  const wrapperStyle = {
    width: { xs: '250px', md: '300px' },
    height: '40px',
    borderRadius: { xs: '10px', lg: '0px' },
    padding: '.2rem .5rem',
    display: 'flex',
    placeItems: 'center',
    '& .MuiInput-root': { height: '40px', width: '100%' },
    '& .MuiInput-input': { flexGrow: 1 },
    background: theme => `${theme.palette.background.primary}`,
    outline: 'none',
    border: 'none'
  }

  return (
    <TextField
      variant='standard'
      placeholder='Search'
      sx={wrapperStyle}
      InputProps={{
        endAdornment: <SearchIcon />, // <== adjusted this
        disableUnderline: true // <== added this
      }}
    />
  )
}
