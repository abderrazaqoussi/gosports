// ** Util Import
import { hexToRGBA } from 'src/utils/styles/hex-to-rgba'

const Timeline = theme => {
  return {
    MuiTimelineItem: {
      styleOverrides: {
        root: {
          '&:not(:last-of-type)': {
            '& .MuiTimelineContent-root': {
              marginBottom: theme.spacing(4)
            }
          }
        }
      }
    },
    MuiTimelineConnector: {
      styleOverrides: {
        root: {}
      }
    },
    MuiTimelineContent: {
      styleOverrides: {
        root: {
          marginTop: theme.spacing(0.5)
        }
      }
    },
    MuiTimelineDot: {
      styleOverrides: {
        filledPrimary: {},
        filledSecondary: {},
        filledSuccess: {},
        filledError: {},
        filledWarning: {},
        filledInfo: {},
        filledGrey: {},
        outlinedPrimary: {},
        outlinedSecondary: {},
        outlinedSuccess: {},
        outlinedError: {},
        outlinedWarning: {},
        outlinedInfo: {},
        outlinedGrey: {}
      }
    }
  }
}

export default Timeline
