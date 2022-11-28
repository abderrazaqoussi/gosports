// ** import from MUI
import Button from '@mui/material/Button'
import { useCookie } from 'next-cookie'

export default function SignOutBtn() {
  const cookies = useCookie()
  console.log(cookies)

  return (
    <a href={`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/logout`} style={{ width: '100%', height: '100%' }}>
      <Button
        onClick={() => {
          cookies.remove('teams')
        }}
        aria-label='signout btn'
        sx={{ width: '100%', height: '100%' }}
      >
        Log Out
      </Button>
    </a>
  )
}
