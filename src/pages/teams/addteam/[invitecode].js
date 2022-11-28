// ** Layout Import
import BlankLayout from 'src/layouts/BlankLayout'

// import utils
import dynamic from 'next/dynamic'

const InviteCard = dynamic(() => import('src/views/teams/InviteCard'), {
  ssr: false
})

export default function AddTeam({ team, invitecode }) {
  return (
    <div style={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center' }} className='pageContainer'>
      <InviteCard team={team} />
    </div>
  )
}

AddTeam.getLayout = page => <BlankLayout>{page}</BlankLayout>

export async function getServerSideProps(context) {
  const { invitecode } = context.params

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/teams/${invitecode}`)
  const data = await res.json()

  if (!data?.team.length) {
    return {
      redirect: {
        destination: '/teams',
        permanent: false
      }
    }
  }

  return {
    props: { team: data?.team[0], invitecode }
  }
}
