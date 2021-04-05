import { AppBar, Divider, Toolbar, useMediaQuery } from '@material-ui/core'
import useStyles from './style'
import MobileFooter from './mobile'
import DesktopFooter from './desktop'
import React from 'react'
export default function Footer() {
  const classes = useStyles()
  const responsive = useMediaQuery((theme) => theme.breakpoints.down('md'))
  return (
    <>
      <AppBar
        position={'static'}
        color={'transparent'}
        className={classes.root}
      >
        <Divider />
        <Toolbar>{responsive ? <MobileFooter /> : <DesktopFooter />}</Toolbar>
      </AppBar>
    </>
  )
}
