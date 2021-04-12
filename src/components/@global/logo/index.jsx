import { Button, Grid, Typography } from '@material-ui/core'
import { Logo } from '../../../assets'
import PropTypes from 'prop-types'
import React from 'react'
import { useHistory } from 'react-router-dom'
import useStyles from './style'

function DefaultLogo({ size, fontSize }) {
  const history = useHistory()
  const classes = useStyles()
  return (
    <Button onClick={() => history.push('/')} className={'focus:outline-none'}>
      <Grid
        direction={'row'}
        alignContent={'center'}
        justify={'center'}
        alignItems={'center'}
        container
      >
        <Grid item>
          <img src={Logo} alt={'Logo'} style={{ maxWidth: size }} />
        </Grid>
        <Grid item>
          <Typography style={{ fontSize: fontSize }} className={classes.text}>
            MagicBox
          </Typography>
        </Grid>
      </Grid>
    </Button>
  )
}
DefaultLogo.propTypes = {
  size: PropTypes.number.isRequired,
  fontSize: PropTypes.string.isRequired,
}
export default DefaultLogo
