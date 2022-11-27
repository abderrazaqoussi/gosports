// ** MUI Imports
import Zoom from '@mui/material/Zoom'
import { styled } from '@mui/material/styles'
import useScrollTrigger from '@mui/material/useScrollTrigger'

// ** import Icon
import ArrowUpIcon from 'public/icons/ArrowUpIcon'

// ** set Styles
const ScrollToTopStyled = styled('button')(({ theme }) => ({
  zIndex: 11,
  position: 'fixed',
  right: theme.spacing(6),
  bottom: theme.spacing(10),
  width: '60px',
  height: '60px',
  background: '#222',
  borderRadius: '50%',
  display: 'grid',
  placeItems: 'center',
  '& svg': {
    width: '30px',
    height: '30px'
  }
}))

export default function ScrollToTop() {
  // ** init trigger
  const trigger = useScrollTrigger({
    threshold: 100,
    disableHysteresis: true
  })

  const handleClick = () => {
    const anchor = document.querySelector('body')
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Zoom in={trigger}>
      <ScrollToTopStyled aria-label='scroll to top' className='mui-fixed' onClick={handleClick} role='presentation'>
        <ArrowUpIcon />
      </ScrollToTopStyled>
    </Zoom>
  )
}
