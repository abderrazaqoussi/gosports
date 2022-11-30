// ** import from Next
import Head from 'next/head'
import { useEffect } from 'react'
import { useCookie } from 'next-cookie'
import parseJwt from 'src/utils/cookies/parseJwt'
import { getTeamsByID } from 'src/utils/api/apisConfig'
import unifyingText from 'src/utils/strings/unifyingText'

export default function Home({}) {
  return (
    <div>
      <Head>
        <title>GoSports : Home</title>
      </Head>
      <main style={{ width: '100%', height: '800px', display: 'flex', justifyContent: 'center' }}></main>
    </div>
  )
}

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

  const userId = parseJwt(jwt).id
  let teams = cookies.get('teams')

  if (!teams) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/teams/user/${userId}`)
    const data = await res.json()
    if (data.status === 'Success') {
      teams = {}
      data.data.map(e => {
        teams[unifyingText(e.name)] = e._id
      })
      cookies.set(`teams`, JSON.stringify(teams))
    }
  }

  return {
    props: {}
  }
}
