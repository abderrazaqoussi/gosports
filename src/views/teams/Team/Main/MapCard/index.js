// ** import from React
import { useRef, useEffect, useState } from 'react'

// import from MUI
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

// ** import icon
import ExternalLink from 'public/icons/ExternalLink'

// ** import Comp
import Map from './Map'

export default function MapCard({ mapData, full, recent }) {
  const [cardHeight, setCardHeight] = useState('100%')
  const ourCard = useRef(null)
  useEffect(() => {
    setCardHeight(`${ourCard.current.offsetWidth}px`)
  }, [ourCard])

  return (
    <Box
      ref={ourCard}
      sx={{
        flexGrow: 1,
        minWidth: '50%',
        height: full ? '100%' : cardHeight,
        order: { xs: 2, sm: 1 },
        border: '1px solid #edf2f4',
        borderRadius: '20px',
        padding: ' 1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}
    >
      <Box
        className='header'
        sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <Typography sx={{ fontSize: '1.2rem', fontWeight: 500 }}>
          {recent ? 'Recent Acitivity' : mapData.name}
        </Typography>
        <IconButton component='a' href={`/activities/${mapData.id}`}>
          <ExternalLink />
        </IconButton>
      </Box>
      {!mapData.errors ? (
        <Map acitivity={mapData} />
      ) : (
        <Box sx={{ flexGrow: 1, display: 'grid', placeItems: 'center', background: '#f8f9fa' }}>
          There are currently no activities
        </Box>
      )}
    </Box>
  )
}
