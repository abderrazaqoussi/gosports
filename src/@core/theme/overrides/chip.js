const Chip = theme => {
  return {
    MuiChip: {
      styleOverrides: {
        outlined: {
          '&.MuiChip-colorDefault': {
            borderColor: `rgba(${theme.palette.border}, 0.22)`
          }
        },
        deleteIcon: {
          width: 18,
          height: 18
        }
      }
    }
  }
}

export default Chip
