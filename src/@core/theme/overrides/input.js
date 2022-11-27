const input = theme => {
  return {
    MuiInputLabel: {
      styleOverrides: {
        root: {}
      }
    },
    MuiInput: {
      styleOverrides: {
        root: {
          '&:before': {
            borderBottom: `1px solid rgba(${theme.palette.border}, 0.22)`
          },
          '&:hover:not(.Mui-disabled):before': {
            borderBottom: `1px solid rgba(${theme.palette.border}, 0.32)`
          },
          '&.Mui-disabled:before': {
            borderBottom: `1px solid ${theme.palette.border}`
          }
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          '&:hover:not(.Mui-disabled)': {},
          '&:before': {},
          '&:hover:not(.Mui-disabled):before': {}
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&:hover:not(.Mui-focused) .MuiOutlinedInput-notchedOutline': {},
          '&:hover.Mui-error .MuiOutlinedInput-notchedOutline': {},
          '& .MuiOutlinedInput-notchedOutline': {},
          '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {}
        }
      }
    }
  }
}

export default input
