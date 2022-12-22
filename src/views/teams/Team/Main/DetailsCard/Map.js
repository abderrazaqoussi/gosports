//import From Mui
import Box from '@mui/material/Box'

// import Map from Leaflet
import { MapContainer, TileLayer, Polyline, Circle } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import polyline from '@mapbox/polyline'

function polyDecode(code) {
  return polyline.decode(code)
}

export default function Map({ data }) {
  const {
    start_latlng: startPosition,
    end_latlng: endPosition,
    map: { summary_polyline: polylineString }
  } = data

  return (
    <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
      <MapContainer bounds={polyDecode(polylineString)} style={{ width: '100%', height: '105%' }} zoomControl={false}>
        {/* MAp */}

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />

        {/* PAth */}

        {polylineString ? <Polyline pathOptions={{ color: '#4361ee' }} positions={polyDecode(polylineString)} /> : null}

        {/* Start & End Position */}

        <Circle center={startPosition} radius={3} pathOptions={{ color: '#06d6a0' }} />
        <Circle center={endPosition} radius={3} pathOptions={{ color: '#fca311' }} />
      </MapContainer>
      <Box
        sx={{ background: '#fff', width: '100%', height: '20px', position: 'absolute', bottom: '-15px', zIndex: 1000 }}
      ></Box>
    </Box>
  )
}
