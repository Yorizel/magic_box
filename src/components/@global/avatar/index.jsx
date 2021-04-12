import { Avatar, Grid, Typography } from '@material-ui/core'
import { AccountIcon, AvatarImage } from '../../../assets'
import React, { useContext } from 'react'
import useStyles from './style'
import { AuthContext } from '../../../context/authContext'
import PropTypes from 'prop-types'

export const DefaultMenuAvatar = () => {
  const { auth } = useContext(AuthContext)
  const classes = useStyles()
  const DefaultSubtitle = () => (
    <Grid
      direction={'column'}
      justify={'center'}
      alignItems={'flex-start'}
      container
    >
      <Grid item>
        <Typography className={classes.avatarTitleDesktop}>
          {auth.firstName ? `${auth.firstName} ${auth.lastName}` : 'Visitante'}
        </Typography>
      </Grid>
      <Grid item className={classes.avatarSubTitleDesktop}>
        <Typography>
          {auth.isLogged ? 'Veja seu perfil' : 'clique para logar'}
        </Typography>
      </Grid>
    </Grid>
  )
  return (
    <>
      <Grid
        direction={'row'}
        justify={'center'}
        alignItems={'center'}
        spacing={1}
        container
      >
        <Grid item>
          {auth.isLogged ? (
            <Avatar src={AvatarImage} className={classes.avatar} />
          ) : (
            <Avatar src={AccountIcon} className={classes.avatar} />
          )}
        </Grid>
        <Grid item>
          <DefaultSubtitle />
        </Grid>
      </Grid>
    </>
  )
}
function DefaultAvatar({ size, fontSize }) {
  const { auth } = useContext(AuthContext)

  const classes = useStyles()
  return (
    <>
      <Grid
        direction={'row'}
        justify={'space-evenly'}
        alignItems={'center'}
        spacing={1}
        container
      >
        <Grid item>
          {auth.isLogged ? (
            <Avatar src={AvatarImage} style={{ width: size, height: size }} />
          ) : (
            <Avatar src={AccountIcon} style={{ width: size, height: size }} />
          )}
        </Grid>
        <Grid item>
          <Typography
            style={{ fontSize: fontSize }}
            className={classes.avatarTitleDesktop}
          >
            {auth.firstName ? `${auth.firstName}` : 'Visitante'}
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}
DefaultAvatar.propTypes = {
  size: PropTypes.number.isRequired,
  fontSize: PropTypes.string.isRequired,
}
export default DefaultAvatar
