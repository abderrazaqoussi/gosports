const Tabs = theme => {
  return {
    MuiTabs: {
      styleOverrides: {
        vertical: {
          '& .MuiTab-root': {
            gap: '10px'
          },
          '& .MuiTabs-indicator': {
            display: 'none'
          },
          '& .MuiTabs-scrollButtons.Mui-disabled': {
            display: 'none'
          }
        },
        horizontal: {
          '& .MuiTab-root': {
            gap: '10px'
          },
          '& .MuiTabs-indicator': {
            display: 'none'
          },
          '& .MuiTabs-scrollButtons.Mui-disabled': {
            display: 'none'
          }
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        textColorSecondary: {
          '&.Mui-selected': {}
        }
      }
    }
  }
}

export default Tabs
