import { LinearProgress } from '@material-ui/core'
import React from 'react'
import useStyles from './style'

function DefaultLinerLoading() {
  const classes = useStyles()
  return <LinearProgress className={classes.root} />
}
export default DefaultLinerLoading
