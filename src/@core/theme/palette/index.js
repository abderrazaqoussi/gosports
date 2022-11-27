export function ColorTrans(color) {
  return {
    100: color + 'FF',
    99: color + 'FC',
    98: color + 'FA',
    97: color + 'F7',
    96: color + 'F5',
    95: color + 'F2',
    94: color + 'F0',
    93: color + 'ED',
    92: color + 'EB',
    91: color + 'E8',
    90: color + 'E6',
    89: color + 'E3',
    88: color + 'E0',
    87: color + 'DE',
    86: color + 'DB',
    85: color + 'D9',
    84: color + 'D6',
    83: color + 'D4',
    82: color + 'D1',
    81: color + 'CF',
    80: color + 'CC',
    79: color + 'C9',
    78: color + 'C7',
    77: color + 'C4',
    76: color + 'C2',
    75: color + 'BF',
    74: color + 'BD',
    73: color + 'BA',
    72: color + 'B8',
    71: color + 'B5',
    70: color + 'B3',
    69: color + 'B0',
    68: color + 'AD',
    67: color + 'AB',
    66: color + 'A8',
    65: color + 'A6',
    64: color + 'A3',
    63: color + 'A1',
    62: color + '9E',
    61: color + '9C',
    60: color + '99',
    59: color + '96',
    58: color + '94',
    57: color + '91',
    56: color + '8F',
    55: color + '8C',
    54: color + '8A',
    53: color + '87',
    52: color + '85',
    51: color + '82',
    50: color + '80',
    49: color + '7D',
    48: color + '7A',
    47: color + '78',
    46: color + '75',
    45: color + '73',
    44: color + '70',
    43: color + '6E',
    42: color + '6B',
    41: color + '69',
    40: color + '66',
    39: color + '63',
    38: color + '61',
    37: color + '5E',
    36: color + '5C',
    35: color + '59',
    34: color + '57',
    33: color + '54',
    32: color + '52',
    31: color + '4F',
    30: color + '4D',
    29: color + '4A',
    28: color + '47',
    27: color + '45',
    26: color + '42',
    25: color + '40',
    24: color + '3D',
    23: color + '3B',
    22: color + '38',
    21: color + '36',
    20: color + '33',
    19: color + '30',
    18: color + '2E',
    17: color + '2B',
    16: color + '29',
    15: color + '26',
    14: color + '24',
    13: color + '21',
    12: color + '1F',
    11: color + '1C',
    10: color + '1A',
    9: color + '17',
    8: color + '14',
    7: color + '12',
    6: color + '0F',
    5: color + '0D',
    4: color + '0A',
    3: color + '08',
    2: color + '05',
    1: color + '03',
    0: color + '00'
  }
}

export default function DefaultPalette(mode) {
  // ** Methodes
  const Color = (lightColor, darkColor, aniviaColor) => {
    switch (mode) {
      case 'light':
        return lightColor
      case 'dark':
        return darkColor
      case 'anivia':
        return aniviaColor
      default:
        return lightColor
    }
  }

  // ** Variables
  const mainColor = Color('#f7f6fd', '#3c4042', '#eef2f3')
  const textColor = Color('#1a1a1a', '#d0d0d0', '#a4a8b0')

  return {
    // ** Mode
    mode: mode,

    // ** Palettes
    primary: {
      main: Color('#9155FD', '#804BDF', '#9E69FD'),
      contrastText: '#FFF'
    },
    secondary: {
      main: Color('#777B82', '#9C9FA4', '#8A8D93'),
      contrastText: '#FFF'
    },
    success: {
      main: Color('#4CB200', '#6AD01F', '#56CA00'),
      contrastText: '#FFF'
    },
    error: {
      main: Color('#E04347', '#FF6166', '#FF4C51'),
      contrastText: '#FFF'
    },
    warning: {
      main: Color('#FFB400', '#FFCA64', '#E09E00'),
      contrastText: '#FFF'
    },
    info: {
      main: Color('#139CE0', '#16B1FF', '#32BAFF'),
      contrastText: '#FFF'
    },

    grey: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#D5D5D5',
      A200: '#AAAAAA',
      A400: '#616161',
      A700: '#303030'
    },

    // ** Text & Bg
    text: {
      default: textColor,
      primary: ColorTrans(textColor)[87],
      secondary: ColorTrans(textColor)[68],
      disabled: ColorTrans(textColor)[38]
    },

    background: {
      default: mainColor,
      primary: Color('#ffffff', '#202124', '#dee2e5')
    },

    // ** Styles
    border: Color('#eef2f3', '#12131C	', '#bbbfc2'),

    // ** Components
    svg: {
      default: Color('#353b4c', '#e9ecef', '#353b4c'),
      disabled: Color('#8a9099', '#adb5bd', '#8a9099'),
      primary: ColorTrans(textColor)[87]
    },

    // ** Actions
    action: {
      active: ColorTrans(mainColor)[54],
      hover: ColorTrans(mainColor)[4],
      selected: ColorTrans(mainColor)[8],
      disabled: ColorTrans(mainColor)[3],
      disabledBackground: ColorTrans(mainColor)[18],
      focus: ColorTrans(mainColor)[12]
    }
  }
}
