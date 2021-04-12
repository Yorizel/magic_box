import { useLocation } from 'react-router-dom'
import React, { useState } from 'react'
import { Box } from '@material-ui/core'
import PostFocusContent from './content'

export default function PostFocused() {
  const location = useLocation()

  const [data] = useState(location?.state?.data)

  return (
    <Box className={'min-h-screen overflow-hidden'}>
      <PostFocusContent data={data} />
    </Box>
  )
}
