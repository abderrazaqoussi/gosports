// ** Layout Import
import BlankLayout from 'src/layouts/BlankLayout'
import { useCookie } from 'next-cookie'

// import utils
import dynamic from 'next/dynamic'

const InviteCard = dynamic(() => import('src/views/teams/InviteCard'), {
  ssr: false
})

export default function AddTeam({ team }) {
  console.log(team)
  return (
    <div style={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center' }} className='pageContainer'>
      <InviteCard team={team} />
    </div>
  )
}

AddTeam.getLayout = page => <BlankLayout>{page}</BlankLayout>

export async function getServerSideProps(context) {
  const cookies = useCookie(context)
  const jwt = cookies.get('jwt')
  if (!jwt) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false
      }
    }
  }

  const { invitecode } = context.params
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/teams/${invitecode}`)
    const data = await res.json()
    if (data.status !== 'Success') {
      return {
        redirect: {
          destination: '/teams',
          permanent: false
        }
      }
    }
    return {
      props: { team: data.data[0] }
    }
  } catch (err) {
    return {
      redirect: {
        destination: '/teams',
        permanent: false
      }
    }
  }
}
