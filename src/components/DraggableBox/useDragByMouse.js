import { useState, useEffect, useRef, useMemo } from 'react'

export default function useDragByMouse(orientation, offset) {
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
  const mouseDownHandler = e => {
    setIsPointerDown(true)
    setInitPosition(orientation === 'vertical' ? e.clientY - offsetVal : e.clientX - offsetVal)
  }

  const mouseMoveHandler = e => {
    // console.log('move')

    e.preventDefault()

    if (!isPointerDown) return

    switch (orientation) {
      case 'vertical':
        const maxTop = container.current.parentElement.offsetHeight - container.current.offsetHeight

        // console.log({ marg: e.clientY - initPosition, offsetVal, maxTop })
        // ** Go Top
        if (e.clientY - initPosition > 0) {
          setOffsetVal(e.clientY - initPosition > 0 ? 0 : e.clientY - initPosition)
        }

        // ** Go Bottom
        else if (e.clientY - initPosition < 0 && e.clientY - initPosition > maxTop) {
          setOffsetVal(e.clientY - initPosition < maxTop ? maxTop : e.clientY - initPosition)
        }
        break
      case 'horizontal':
        const maxLeft = container.current.parentElement.offsetWidth - container.current.offsetWidth

        // ** Move Child element to user right direction
        if (e.clientX - initPosition > 0) {
          setOffsetVal(e.clientX - initPosition > 0 ? 0 : e.clientX - initPosition)
        }

        // ** Move Child element to user left direction
        else if (e.clientX - initPosition < 0 && e.clientX - initPosition > maxLeft) {
          setOffsetVal(e.clientX - initPosition < maxLeft ? maxLeft : e.clientX - initPosition)
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
    element.addEventListener('mousedown', mouseDownHandler)
    element.addEventListener('mousemove', mouseMoveHandler)
    element.addEventListener('mouseup', pointerUpHandler)
    element.addEventListener('mouseleave', pointerLeaveHandler)

    return () => {
      element.removeEventListener('mousedown', mouseDownHandler)
      element.removeEventListener('mousemove', mouseMoveHandler)
      element.removeEventListener('mouseup', pointerUpHandler)
      element.removeEventListener('mouseleave', pointerLeaveHandler)
    }
  })

  // Return
  return { offsetVal, setRef }
}
