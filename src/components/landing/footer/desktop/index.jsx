import { Grid, IconButton } from '@material-ui/core'
import { Instagram, YouTube } from '@material-ui/icons'

import React from 'react'
import DefaultLogo from '../../../@global/logo'

export default function DesktopFooter() {
  return (
    <>
      <Grid
        spacing={2}
        direction={'row'}
        justify={'center'}
        alignItems={'center'}
        container
      >
        <Grid item>
          <DefaultLogo fontSize={'1.50rem'} size={40} />
        </Grid>
      </Grid>
      <Grid alignItems={'center'} justify={'center'} container>
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
      </Grid>
    </>
  )
}
