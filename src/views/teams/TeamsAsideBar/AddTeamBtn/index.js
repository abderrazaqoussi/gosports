// ** import from Next & React
import { useState } from 'react'
import dynamic from 'next/dynamic'

// ** Import Comp
const CreateTeam = dynamic(() => import('./CreateTeam'))

// ** import from MUI
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

import { useTheme } from '@mui/material'
// ** import Icon
import AddIcon from 'public/icons/AddIcon'

export default function AddBtn({ userId }) {
  // Set States
  const [openModal, setOpenModal] = useState(false)
  const handleOpen = () => setOpenModal(true)
  const handleClose = () => setOpenModal(false)
  const theme = useTheme()

  // Set Style
  const btnStyle = {
    width: `50px`,
    minWidth: '50px',
    height: `50px`,
    borderRadius: '50%'
  }

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '90%', md: 500 },
    background: theme.palette.background.default,
    borderRadius: '0px',
    boxShadow: 24,
    padding: '1.25rem 1.75rem'
  }

  return (
    <Box component='section' sx={{ display: 'grid', placeItems: 'center', background: 'none' }}>
      <Button
        onClick={handleOpen}
        sx={{
          ...btnStyle,
          background: theme.palette.background.default,
          svg: { width: '24px', height: '24px', fill: theme.palette.svg.primary }
        }}
        aria-label='Join or create Team btn'
      >
        <AddIcon />
      </Button>

      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={modalStyle}>
          <CreateTeam handleClose={handleClose} userId={userId} />
        </Box>
      </Modal>
    </Box>
  )
}
