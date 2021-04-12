import { AppBar, Divider, Toolbar } from '@material-ui/core'
import useStyles from './style'
import FooterContent from './desktop'
import React from 'react'

export default function Footer() {
  const classes = useStyles()

  return (
    <>
      <AppBar
        position={'static'}
        color={'transparent'}
        className={classes.root}
      >
        <Divider />
        <Toolbar>
          <FooterContent />
        </Toolbar>
      </AppBar>
    </>
  )
}
