// ** import from MUI
import Button from '@mui/material/Button'

export default function SignOutBtn() {
  return (
    <a href={`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/logout`}>
      <Button aria-label='signout btn' sx={{ width: '100%', height: '100%' }}>
        Log Out
      </Button>
    </a>
  )
}
