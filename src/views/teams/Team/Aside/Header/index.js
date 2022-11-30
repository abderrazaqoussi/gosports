// ** import from Next
import Image from 'next/image'

// ** import from MUI
import Box from '@mui/material/Box'

import NoImage from 'public/icons/NoImage'

export default function index({ imageSrc, teamName, membersNum }) {
  // Set Styles
  const style = {
    headerStyle: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      alignItems: 'center',
      paddingBlock: '1rem'
    },
    imgStyle: {
      background: 'blue',
      width: { xs: '100%', md: '150px' },
      minHeight: '100px',
      maxHeight: '240px',
      position: 'relative',
      aspectRatio: '1 / 1',
      borderRadius: { xs: 0, md: '50%' },
      overflow: 'hidden',
      position: 'relative',
      border: { xs: 'none', md: '4px solid #fff' },
      outline: { xs: 'none', md: '4px solid #234' }
    }
  }

  // Return Component
  return (
    <Box component={'header'} sx={style.headerStyle}>
      <Box sx={style.imgStyle}>
        {imageSrc ? (
          <Image src={imageSrc} alt={`${teamName} Team Picture`} layout='fill' objectFit='cover' quality={100} />
        ) : (
          <NoImage />
        )}
      </Box>
      <Box sx={{ fontSize: '1.2rem', fontWeight: 600 }}>{teamName || 'Untitled'}</Box>
      <Box sx={{ fontSize: '.8rem' }}>{`${membersNum || 1} Members`}</Box>
    </Box>
  )
}
