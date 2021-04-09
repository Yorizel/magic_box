import React from 'react'
import { AppBar, Toolbar, useMediaQuery } from '@material-ui/core'
import DesktopDashboardNavbar from './desktop'
import MobileDashboardNavbar from './mobile'

export default function DashboardNavbar() {
  const responsive = useMediaQuery((theme) => theme.breakpoints.down('md'))
  return (
    <AppBar color={'transparent'} style={{ padding: 16, boxShadow: 'none' }}>
      <Toolbar>
        {responsive ? <MobileDashboardNavbar /> : <DesktopDashboardNavbar />}
      </Toolbar>
    </AppBar>
  )
}
