export const containerStyle = {
  width: '100%',
  overflow: 'hidden',
  maxWidth: '900px',
  height: '100%',
  position: 'relative',
  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
  borderRadius: '10px'
}

export const headerStyle = {
  position: 'absolute',
  top: 0,
  width: '100%',
  zIndex: 1000,
  padding: '.75rem 1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}

export const footerStyle = {
  width: { xs: '95%', lg: '80%' },
  height: '90px',
  zIndex: 1000,
  padding: '.5rem .75rem ',
  background: '#fff',
  position: 'absolute',
  bottom: '1rem',
  left: '50%',
  transform: 'translateX(-50%)',
  borderRadius: '15px',
  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '15px'
}
