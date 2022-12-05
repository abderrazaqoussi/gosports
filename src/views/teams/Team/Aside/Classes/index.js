// ** import from React
import { useState } from 'react'

// ** import from MUI
import Box from '@mui/material/Box'
import AddClass from './AddClass'
import PlannedClasses from './PlannedClasses'

export default function Index({ team }) {
  // set Hooks
  const [isOpen, setIsOpen] = useState(false)

  // set Styles
  const style = {
    containerStyle: {
      width: '100%',
      maxWidth: { xs: '100%', md: '350px', lg: '400px' },
      padding: '.75rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
      borderTop: '1px solid #edf2f4'
    },
    modelStyle: {
      position: 'absolute',
      width: '100vw',
      height: '100vh',
      top: 0,
      left: 0
    }
  }

  return (
    <>
      {!isOpen ? (
        <Box sx={style.containerStyle}>
          <PlannedClasses setIsOpen={setIsOpen} />
        </Box>
      ) : (
        <Box sx={style.containerStyle}>
          <AddClass setIsOpen={setIsOpen} members={team.members} />
        </Box>
      )}
    </>
  )
}
