import React from 'react'

export default function Tabs({ children, orientation }) {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: orientation === 'horizontal' ? 'row' : 'column',
        gap: '5px',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1rem'
        // borderBottom: '1px solid gray'
      }}
    >
      {children}
    </div>
  )
}
