import React from 'react'

export default function Controller({ children }) {
  return <div style={{ display: 'grid', placeItems: 'center', overflow: 'hidden' }}>{children}</div>
}
