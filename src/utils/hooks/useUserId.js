import { useQuery } from 'react-query'
import { useCookie } from 'next-cookie'
import parseJwt from 'src/utils/cookies/parseJwt'

export default function useUserId() {
  const cookie = useCookie()
  return useQuery('userId', async () => {
    const id = await parseJwt(cookie.get('jwt')).id
    return id
  })
}
