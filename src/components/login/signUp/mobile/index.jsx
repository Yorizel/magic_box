import { Button, Grid, TextField, Typography } from '@material-ui/core'
import useStyles from './style'
import DefaultLogo from '../../../@global/logo'
import PropTypes from 'prop-types'
import React from 'react'

function SignUpMobile({ set }) {
  const classes = useStyles()
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        justifyContent: 'center',
      }}
    >
      <form noValidate>
        <Grid
          justify={'space-evenly'}
          alignItems={'center'}
          alignContent={'center'}
          direction={'column'}
          container
          spacing={2}
          className={classes.root}
        >
          <Grid item>
            <DefaultLogo size={40} fontSize={'2.00rem'} />
          </Grid>
          <Grid
            direction={'row'}
            alignItems={'center'}
            justify={'space-evenly'}
            container
            item
          >
            <Grid className={classes.nameInputField} item>
              <TextField fullWidth label={'Primeiro nome'} />
            </Grid>
            <Grid className={classes.nameInputField} item>
              <TextField fullWidth label={'Ultimo nome'} />
            </Grid>
          </Grid>
          <Grid
            direction={'column'}
            alignContent={'center'}
            alignItems={'center'}
            justify={'center'}
            spacing={2}
            container
            item
          >
            <Grid className={classes.inputField} item>
              <TextField fullWidth label={'Email'} />
            </Grid>
            <Grid className={classes.inputField} item>
              <TextField fullWidth label={'Senha'} />
            </Grid>
            <Grid className={classes.inputField} item>
              <TextField fullWidth label={'Confirme sua senha'} />
            </Grid>
          </Grid>

          <Grid item>
            <Button className={classes.button}>Criar conta</Button>
          </Grid>

          <Grid item>
            <Typography
              onClick={() => set(false)}
              className={classes.textButton}
            >
              Já tem uma conta?
            </Typography>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}
SignUpMobile.propTypes = {
  set: PropTypes.func,
}
export default SignUpMobile
