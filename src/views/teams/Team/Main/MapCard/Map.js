// import from React
import { useState } from 'react'

// import Map from Leaflet
import { MapContainer, TileLayer, Polyline } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

//import From Mui
import Box from '@mui/material/Box'

// Import Methodes
import { toKilometre, polyDecode } from './methodes'
import getMonths from 'src/utils/date/getMonths'
import { containerStyle, footerStyle } from './style'

// Return Component
export default function Map({ acitivity }) {
  const {
    name: aTitle,
    distance: aDistance,
    average_speed: aAverageSpeed,
    start_date: Adate,
    start_latlng: startPosition,
    end_latlng: endPosition,
    map: { summary_polyline: polylineString }
  } = acitivity

  const [center, setCenter] = useState({ lat: startPosition[0], lng: startPosition[1] })
  const ZOOM_LEVEL = 15

  return (
    <Box sx={containerStyle}>
      <MapContainer center={center} zoom={ZOOM_LEVEL} style={{ width: '100%', height: '105%' }} zoomControl={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {polylineString ? <Polyline pathOptions={{ color: '#4361ee' }} positions={polyDecode(polylineString)} /> : null}
      </MapContainer>

      <Box sx={footerStyle}>
        <Box className='card' sx={{ width: 'calc(100%/3)', display: 'grid', placeItems: 'center' }}>
          <Box
            className='row'
            sx={{
              fontSize: { xs: '1.1rem', md: '1.4rem', lg: '1.4rem' },
              fontWeight: 800,
              color: '#0077b6'
            }}
          >
            {new Date(Adate).getDate()}
          </Box>
          <Box className='row' sx={{ fontSize: '.8rem' }}>
            {getMonths()[new Date(Adate).getMonth()]}
          </Box>
        </Box>
        <div className='divider' style={{ width: '1px', height: '100%', background: '#d9d9d9' }}></div>
        <Box className='card' sx={{ width: 'calc(100%/3)', display: 'grid', placeItems: 'center' }}>
          <Box
            className='row'
            sx={{
              fontSize: { xs: '1.1rem', md: '1.4rem', lg: '1.4rem' },
              fontWeight: 800,
              color: '#0077b6'
            }}
          >
            {aAverageSpeed.toFixed(1)}
          </Box>
          <Box className='row' sx={{ fontSize: '.8rem' }}>
            {'Speed (Km/h)'}
          </Box>
        </Box>
        <div className='divider' style={{ width: '1px', height: '100%', background: '#d9d9d9' }}></div>
        <Box className='card' sx={{ width: 'calc(100%/3)', display: 'grid', placeItems: 'center' }}>
          <Box
            className='row'
            sx={{ fontSize: { xs: '1.1rem', md: '1.4rem', lg: '1.4rem' }, fontWeight: 800, color: '#0077b6' }}
          >
            {toKilometre(aDistance)}
          </Box>
          <Box className='row' sx={{ fontSize: '.8rem' }}>
            {'Distance (Km)'}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
