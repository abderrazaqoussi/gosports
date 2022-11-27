// ** Util Import
import { hexToRGBA } from 'src/utils/styles/hex-to-rgba'

const Pagination = theme => {
  return {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected:not(.Mui-disabled):not(.MuiPaginationItem-textPrimary):not(.MuiPaginationItem-textSecondary):hover':
            {}
        },
        outlined: {},
        outlinedPrimary: {
          '&.Mui-selected': {
            '&:hover': {}
          }
        },
        outlinedSecondary: {
          '&.Mui-selected': {
            '&:hover': {}
          }
        }
      }
    }
  }
}

export default Pagination
