import { Grid, IconButton, Box } from '@material-ui/core'
import { Instagram, YouTube } from '@material-ui/icons'
import React from 'react'
import DefaultLogo from '../../../@global/logo'

export default function MobileFooter() {
  return (
    <>
      <Grid
        spacing={1}
        direction={'row'}
        justify={'space-evenly'}
        alignItems={'center'}
        alignContent={'center'}
        container
      >
        <Grid item>
          <DefaultLogo fontSize={'1.25rem'} size={35} />
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
