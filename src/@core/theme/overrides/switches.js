const Switch = theme => {
  return {
    MuiSwitch: {
      styleOverrides: {
        root: {
          '& .MuiSwitch-track': {}
        }
      }
    }
  }
}

export default Switch
