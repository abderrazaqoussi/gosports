import { useMemo } from 'react'
import Box from '@mui/material/Box'
import DraggableBox from 'src/components/DraggableBox'
import Card from './Card'
import { getHours } from './utils'

export default function index() {
  const thisHour = useMemo(() => new Date().getHours(), [])

  return (
    <>
      <div className='section title' style={{ paddingBlock: '.75rem', fontWeight: 500, fontSize: '1.2rem' }}>
        {'Daily Activity'}
      </div>

      <DraggableBox orientation={'horizontal'} offset={`-${thisHour * 100 - 200}`}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {getHours().map(e => {
              return (
                <div
                  key={e}
                  style={{
                    width: '100px',
                    display: 'grid',
                    placeItems: 'center',
                    color: `${new Date().getHours()}` === e ? '#4283f0' : 'gray'
                  }}
                >
                  {`${e}.00`}
                </div>
              )
            })}
          </Box>
          <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {getHours().map(e => {
              return (
                <div
                  key={e}
                  style={{
                    width: '100px',
                    minHeight: '200px',
                    display: 'grid',
                    placeItems: 'center',
                    position: 'relative',
                    left: '50px',
                    borderLeft: `${new Date().getHours()}` === e ? '2px solid #4283f0' : '1px dashed '
                  }}
                ></div>
              )
            })}
            <Box sx={{ position: 'absolute', zIndex: 99 }}>
              <Card />
            </Box>
          </Box>
        </Box>
      </DraggableBox>
    </>
  )
}
