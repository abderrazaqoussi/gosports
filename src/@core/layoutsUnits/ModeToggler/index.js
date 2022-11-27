// ** import from MUI
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'

// ** import Settings
import { useSettings } from 'src/@core/hooks/useSettings'

export default function ModeToggler() {
  // ** Hooks
  const { settings, saveSettings } = useSettings()

  // ** Styles
  const containerStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingInline: '1rem'
  }

  return (
    <div style={containerStyle}>
      <Typography>Theme</Typography>
      <FormControl sx={{ width: '90px', height: '40px' }}>
        <Select
          variant='standard'
          labelId='selectMode'
          id='selectMode'
          value={settings.mode}
          label='Age'
          onChange={e => {
            saveSettings({ ...settings, mode: e.target.value })
          }}
          sx={{ height: '40px', '&:after, &:before': { border: 'none' } }}
        >
          <MenuItem value={'light'}>Light</MenuItem>
          <MenuItem value={'dark'}>Dark</MenuItem>
          <MenuItem value={'anivia'}>Anivia</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
