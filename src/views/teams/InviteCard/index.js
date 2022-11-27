// ** import from React & Next
import Image from 'next/image'
import { useRouter } from 'next/router'
import converToImage from 'src/utils/images/converBufferToImage'

// ** Import from MUI
import Button from '@mui/material/Button'

export default function index({ team }) {
  const router = useRouter()
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }} className='cardContainer'>
      <div style={{ position: 'relative', width: '60px', height: '60px', overflow: 'hidden' }}>
        <Image alt='test avatar' src={converToImage(team?.teamImage)} layout='fill' />
      </div>
      <div>{team?.name}</div>
      <Button
        onClick={() => {
          router.push(`/teams/${team.name.replace(/\s+/g, '')}`)
        }}
      >
        Join Team
      </Button>
    </div>
  )
}
