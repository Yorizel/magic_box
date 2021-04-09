import { Box, Grid, IconButton } from '@material-ui/core'
import { Instagram, YouTube } from '@material-ui/icons'

import React from 'react'
import DefaultLogo from '../../../@global/logo'

export default function DesktopFooter() {
  return (
    <>
      <Grid
        spacing={2}
        direction={'row'}
        justify={'space-around'}
        alignItems={'center'}
        container
      >
        <Grid item>
          <DefaultLogo fontSize={'1.50rem'} size={40} />
        </Grid>

        <Box display={'flex'}>
          <Grid item>
            <IconButton href={'https://www.instagram.com/magicbox.tv/'}>
              <Instagram />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton>
              <YouTube />
            </IconButton>
          </Grid>
        </Box>
      </Grid>
    </>
  )
}
