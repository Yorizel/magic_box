import React from 'react'
import ProfileContent from '../../components/profile'
import Navbar from '../../components/landing/navbar'
import { Box } from '@material-ui/core'
import Footer from '../../components/landing/footer'

export default function ProfilePage() {
  return (
    <Box style={{ overflow: 'hidden' }}>
      <Navbar />
      <ProfileContent />
      <Footer />
    </Box>
  )
}
