// ** import from React
import { useState, useEffect } from 'react'
import converToImage from 'src/utils/images/converBufferToImage'

// **
import TabsWrapper from 'src/components/TabsWrapper'

// ** import Sections
import Header from './Header'
import Members from './Members'
import Classes from './Classes'
import Settings from './Settings'
import Main from '../Main'

// **
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'

export default function Index({ team }) {
  console.log({ true: true, team })
  const theme = useTheme()
  const mediumScreen = useMediaQuery(theme => theme.breakpoints.down('md'))
  // set logic

  const asideStyle = {
    background: theme.palette.background.primary,
    padding: { xs: '0', lg: '.5rem .75rem' },
    width: { xs: '100%', md: '350px', lg: '400px' },
    minWidth: { xs: '100%', md: '350px', lg: '400px' },
    height: { xs: 'max-content', md: '100vh' },
    overflowY: { xs: 'auto', md: 'scroll' },
    position: { xs: 'static', md: 'sticky' },
    right: 0,
    top: 0
  }
  // console.log(team)
  return (
    <Box sx={asideStyle}>
      <Header teamName={team?.name} imageSrc={converToImage(team?.teamImage)} membersNum={team?.members.length} />
      {mediumScreen ? (
        <TabsWrapper
          pages={{
            Feed: <Main />,
            Classes: <Classes team={team} />,
            Members: <Members team={team} />,
            Settings: <Settings team={team} />
          }}
        />
      ) : (
        <TabsWrapper
          pages={{
            Classes: <Classes team={team} />,
            Members: <Members team={team} />,
            Settings: <Settings team={team} />
          }}
        />
      )}
    </Box>
  )
}
