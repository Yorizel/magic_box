import { Avatar, Grid, Typography, useMediaQuery } from '@material-ui/core'
import { AccountIcon, AvatarImage } from '../../../assets'
import React, { useContext } from 'react'
import useStyles from './style'
import { AuthContext } from '../../../context/authContext'

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
export default function DefaultAvatar() {
  const responsive = useMediaQuery((theme) => theme.breakpoints.down('md'))
  const { auth } = useContext(AuthContext)

  const classes = useStyles()
  return (
    <>
      {!responsive ? (
        <>
          <Grid
            direction={'row'}
            justify={'space-between'}
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
              <Typography className={classes.avatarTitleDesktop}>
                {auth.firstName ? `${auth.firstName}` : 'Visitante'}
              </Typography>
            </Grid>
          </Grid>
        </>
      ) : (
        <DefaultMenuAvatar />
      )}
    </>
  )
}
