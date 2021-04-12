import React from 'react'
import { Grid, IconButton } from '@material-ui/core'
import DefaultLogo from '../../../@global/logo'
import { ViewHeadline } from '@material-ui/icons'

function MobileDashboardNavbar() {
  return (
    <Grid
      spacing={3}
      justify={'center'}
      alignContent={'center'}
      alignItems={'center'}
      container
    >
      <Grid item>
        <IconButton className={'focus:outline-none'}>
          <ViewHeadline />
        </IconButton>
      </Grid>
      <Grid item>
        <DefaultLogo fontSize={'1.50rem'} size={40} />
      </Grid>
    </Grid>
  )
}
export default MobileDashboardNavbar
