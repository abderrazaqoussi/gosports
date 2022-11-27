import React from 'react'

export default function Tab({ value, isActive, setPage }) {
  return (
    <div
      id={value}
      onClick={() => {
        setPage(value)
      }}
      style={{
        padding: '.25rem .75rem',
        cursor: 'pointer',
        color: isActive ? '#fff' : '#222',
        background: !isActive ? 'none' : '#222',
        borderRadius: '5px',
        fontSize: '.9rem'
      }}
    >
      {value}
    </div>
  )
}
