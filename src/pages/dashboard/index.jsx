import React from 'react'
import { Box } from '@material-ui/core'
import DashboardSideBar from '../../components/dashboard/drawer'

export default function DashboardPage() {
  return (
    <div className={' flex'}>
      <Box className={'grid-cols-4'}>
        <DashboardSideBar />
      </Box>
      <Box>
        <DashboardSideBar />
      </Box>
    </div>
  )
}
