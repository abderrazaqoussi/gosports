// ** import from React
import useDragByMouse from './useDragByMouse'
import useDragByTouch from './useDragByTouch'

// **
import useMediaQuery from '@mui/material/useMediaQuery'

export default function DraggableBox({ children, orientation = 'vertical', boxStyle, offset = 0 }) {
  // use Hooks
  const mediumScreen = useMediaQuery(theme => theme.breakpoints.down('md'))
  const { offsetVal, setRef } = !mediumScreen
    ? useDragByMouse(orientation, offset)
    : useDragByTouch(orientation, offset)

  // ** Set Styles
  const parentStyle = {
    width: orientation !== 'vertical' ? '100%' : 'max-content',
    maxWidth: orientation !== 'vertical' ? '100%' : 'max-content',
    height: orientation === 'vertical' ? '100%' : 'max-content',
    maxHeight: orientation === 'vertical' ? '100%' : 'max-content',
    ...boxStyle,
    overflow: 'hidden'
  }

  const childStyle = {
    minWidth: 'max-content',
    position: 'relative',
    top: `${orientation === 'vertical' ? `${offsetVal}px` : 0}`,
    left: `${orientation === 'vertical' ? 0 : `${offsetVal}px`}`,
    userSelect: 'none'
  }

  return (
    <div style={parentStyle} id='dco-box'>
      <div {...setRef} style={childStyle} id='dch-box'>
        {children}
      </div>
    </div>
  )
}
