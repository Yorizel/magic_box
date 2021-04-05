import React from 'react'
import { Box } from '@material-ui/core'
import { LoginBg } from '../../assets'
import Footer from '../../components/landing/footer'
import { MobileLogin } from '../../components/login'

export default function LoginPage() {
  return (
    <Box
      component={'div'}
      style={{
        backgroundImage: `url(${LoginBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}
    >
      <Box style={{ display: 'flex', justifyContent: 'center' }}>
        <MobileLogin />
      </Box>

      <Footer />
    </Box>
  )
}
