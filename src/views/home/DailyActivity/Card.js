// ** import from React
import { useState, useMemo } from 'react'
import ColorTrans from 'src/utils/styles/ColorTrans'

export default function Card() {
  // ** Set States
  const [modelIsOpen, setModelIsOpen] = useState(false)

  // ** Set Styles
  const containerStyle = {
    // position: 'relative'
  }

  const cardStyle = {
    minWidth: '200px',
    height: '90px',
    background: '#e0f5fa',
    padding: '.5rem .75rem'
  }

  const modelStyle = {
    display: `${modelIsOpen ? 'flex' : 'none'}`,
    position: 'absolute',
    top: 0,
    right: 0,
    width: '800px',
    height: '800px',
    zIndex: 80,
    background: 'red'
  }

  return (
    <div
      style={containerStyle}
      onMouseOver={() => {
        setModelIsOpen(true)
      }}
      onMouseOut={() => {
        setModelIsOpen(false)
      }}
    >
      <div style={cardStyle}>
        <div className='cardTitle' style={{ color: ColorTrans('#623457')[80], fontWeight: 600 }}>
          Hung Out Session
        </div>
      </div>
      <div style={modelStyle}>Wow</div>
    </div>
  )
}
