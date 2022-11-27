import { useState, useEffect, useRef, useMemo } from 'react'

export default function useDragByTouch(orientation, offset) {
  // use Hooks
  const [isPointerDown, setIsPointerDown] = useState(false)
  const [initPosition, setInitPosition] = useState(0)
  const [offsetVal, setOffsetVal] = useState(offset)

  const container = useRef(null)

  const setRef = useMemo(
    () => ({
      ref: container
    }),
    []
  )

  // ** Set Controllers
  const touchDownHandler = e => {
    e.preventDefault()
    setIsPointerDown(true)
    setInitPosition(
      orientation === 'vertical' ? e.targetTouches[0].clientY - offsetVal : e.targetTouches[0].clientX - offsetVal
    )
  }

  const touchMoveHandler = e => {
    // console.log('move')
    e.preventDefault()

    if (!isPointerDown) return

    if (e.touches.length !== 1) return
    console.log(e.targetTouches[0].clientY)
    switch (orientation) {
      case 'vertical':
        const maxTop = container.current.parentElement.offsetHeight - container.current.offsetHeight

        // console.log({ marg: e.clientY - initPosition, offsetVal, maxTop })
        // ** Go Top
        if (e.targetTouches[0].clientY - initPosition > 0) {
          setOffsetVal(e.targetTouches[0].clientY - initPosition > 0 ? 0 : e.targetTouches[0].clientY - initPosition)
        }

        // ** Go Bottom
        else if (e.targetTouches[0].clientY - initPosition < 0 && e.targetTouches[0].clientY - initPosition > maxTop) {
          setOffsetVal(
            e.targetTouches[0].clientY - initPosition < maxTop ? maxTop : e.targetTouches[0].clientY - initPosition
          )
        }
        break
      case 'horizontal':
        const maxLeft = container.current.parentElement.offsetWidth - container.current.offsetWidth

        // ** Move Child element to user right direction
        if (e.targetTouches[0].clientX - initPosition > 0) {
          setOffsetVal(e.targetTouches[0].clientX - initPosition > 0 ? 0 : e.targetTouches[0].clientX - initPosition)
        }

        // ** Move Child element to user left direction
        else if (e.targetTouches[0].clientX - initPosition < 0 && e.targetTouches[0].clientX - initPosition > maxLeft) {
          setOffsetVal(
            e.targetTouches[0].clientX - initPosition < maxLeft ? maxLeft : e.targetTouches[0].clientX - initPosition
          )
        }

        break

      default:
        return
    }
  }

  const pointerUpHandler = e => {
    setIsPointerDown(false)
  }

  const pointerLeaveHandler = e => {
    e.preventDefault()
    setIsPointerDown(false)
  }

  // Add Pointer Events
  useEffect(() => {
    const element = container.current
    element.addEventListener('touchstart', touchDownHandler, { passive: true })
    element.addEventListener('touchmove', touchMoveHandler)
    element.addEventListener('touchend', pointerUpHandler, { passive: true })
    element.addEventListener('touchcancel', pointerLeaveHandler, { passive: true })

    return () => {
      element.removeEventListener('touchstart', touchDownHandler, { passive: true })
      element.removeEventListener('touchmove', touchMoveHandler)
      element.removeEventListener('touchend', pointerUpHandler, { passive: true })
      element.removeEventListener('touchcancel', pointerLeaveHandler, { passive: true })
    }
  })

  // Return
  return { offsetVal, setRef }
}
