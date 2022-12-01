// ** import from React & Next
import Image from 'next/image'
import { useRouter } from 'next/router'
import converToImage from 'src/utils/images/converBufferToImage'
import { addUserToPendingList } from 'src/utils/api/apisConfig'
import useUserId from 'src/utils/hooks/useUserId'
import { useMutation } from 'react-query'

// ** Import from MUI
import Button from '@mui/material/Button'

export default function index({ team }) {
  const handlePendingList = useMutation(addUserToPendingList)
  const { data: userId } = useUserId()
  const router = useRouter()

  const style = {
    cardStyle: {
      display: 'flex',
      flexDirection: 'column',
      width: '300px',
      height: '250px',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      boxShadow:
        'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
      borderRadius: '10px'
    },
    imageStyle: { position: 'relative', width: '80px', height: '80px', overflow: 'hidden', borderRadius: '5px' },
    buttonStyle: {}
  }

  return (
    <div style={style.cardStyle} className='cardContainer'>
      <div style={style.imageStyle}>
        <Image
          src={converToImage(team?.teamImage)}
          alt={`${team?.name} Team Picture`}
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </div>
      <div style={{ fontWeight: 600 }}>{team?.name}</div>
      <Button
        sx={style.buttonStyle}
        variant='contained'
        onClick={() => {
          handlePendingList.mutate(
            { teamId: team._id, userId },
            {
              onSuccess: (data, variables, context) => {
                router.replace(`${router.basePath}/teams`)
              }
            }
          )
        }}
      >
        Join Team
      </Button>
    </div>
  )
}
