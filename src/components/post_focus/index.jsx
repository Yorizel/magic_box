import { useLocation } from 'react-router-dom'
import React, { useState } from 'react'
import { Box, useMediaQuery } from '@material-ui/core'
import DesktopPostFocus from './desktop'
import MobilePostFocus from './mobile'

export default function PostFocused() {
  const location = useLocation()
  const responsive = useMediaQuery((theme) => theme.breakpoints.down('md'))
  const [data] = useState(location?.state?.data)

  return (
    <Box style={{ minHeight: '90vh' }}>
      {responsive ? (
        <MobilePostFocus data={data} />
      ) : (
        <DesktopPostFocus data={data} />
      )}
    </Box>
  )
}
