export default function GlobalStyles(theme) {
  return {
    '*': {
      margin: 0,
      padding: 0,
      border: 'none',
      boxSizing: 'border-box',
      outline: 'none',
      textDecoration: 'none',
      background: 'none',
      fontSize: 'calc(12px + 0.390625vw)',
      scrollbarWidth: 'auto',
      scrollbarColor: '#a1a1a1 #f5f5f5',

      '&::-webkit-scrollbar': {
        width: '5px'
      },

      '&::-webkit-scrollbar-track': {
        background: '#f5f5f5'
      },

      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#a1a1a1',
        borderRadius: '-1px',
        border: '0px solid #d4d3d3'
      }
    },

    '#__next': {
      height: '100%'
    },

    svg: {
      fill: theme.palette.svg.disabled,
      width: 'calc(20px + 0.390625vw)',
      height: 'calc(20px + 0.390625vw)',
      '&:hover': {
        fill: theme.palette.svg.default
      }
    },
    '.ps__rail-y': {
      zIndex: 1,
      right: '0 !important',
      left: 'auto !important',
      '&:hover, &:focus, &.ps--clicking': {
        backgroundColor: theme.palette.mode === 'light' ? '#E4E5EB !important' : '#423D5D !important'
      },
      '& .ps__thumb-y': {
        right: '3px !important',
        left: 'auto !important',
        backgroundColor: theme.palette.mode === 'light' ? '#C2C4D1 !important' : '#504B6D !important'
      },
      '.layout-vertical-nav &': {
        '& .ps__thumb-y': {
          width: 4,
          backgroundColor: theme.palette.mode === 'light' ? '#C2C4D1 !important' : '#504B6D !important'
        },
        '&:hover, &:focus, &.ps--clicking': {
          backgroundColor: 'transparent !important',
          '& .ps__thumb-y': {
            width: 6
          }
        }
      }
    },
    '#nprogress': {
      pointerEvents: 'none',
      '& .bar': {
        left: 0,
        top: 0,
        height: 3,
        width: '100%',
        zIndex: 2000,
        position: 'fixed'
      }
    }
  }
}
