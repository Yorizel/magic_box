import React from 'react'
import {
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from '@material-ui/core'
import useStyles from './style'
import DefaultLogo from '../../../@global/logo'
import PropTypes from 'prop-types'
import { useSignInController } from '../../../../controllers/SignInController'
import DefaultLinerLoading from '../../../@global/loading'
import { Close } from '@material-ui/icons'

function SignInMobile({ set, dialog }) {
  const {
    state,
    errors,
    submit,
    handleSubmit,
    inputRef,
  } = useSignInController({ dialog })
  const classes = useStyles()
  return (
    <div className={classes.rootContainer}>
      <IconButton
        onClick={() => dialog(false)}
        style={{ position: 'absolute', left: '88%', top: '25%' }}
      >
        <Close />
      </IconButton>
      <form onSubmit={handleSubmit(submit)} noValidate>
        <Grid
          justify={'space-evenly'}
          alignItems={'center'}
          alignContent={'center'}
          direction={'column'}
          container
          className={classes.root}
        >
          <Grid item>
            <DefaultLogo size={40} fontSize={'2.00rem'} />
          </Grid>

          <Grid
            direction={'column'}
            alignContent={'center'}
            alignItems={'center'}
            justify={'center'}
            spacing={2}
            container
          >
            <Grid className={classes.inputField} item>
              <TextField
                {...inputRef('email').rest}
                fullWidth
                label={'Email'}
                required
                error={!!errors.email}
                placeholder={'joao@gmail.com'}
                inputRef={inputRef('email').ref}
                helperText={errors.email ? errors.email.message : ''}
              />
            </Grid>
            <Grid className={classes.inputField} item>
              <TextField
                {...inputRef('password').rest}
                fullWidth
                label={'Senha'}
                required
                type={'password'}
                inputRef={inputRef('password').ref}
                error={!!errors.password}
                placeholder={'*******'}
                helperText={errors.password ? errors.password.message : ''}
              />
            </Grid>
          </Grid>
          <Grid
            justify={'space-evenly'}
            alignItems={'center'}
            direction={'row'}
            container
          >
            <Grid item>
              <Button
                type={'submit'}
                variant={'outlined'}
                className={classes.button}
              >
                Entrar
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={() => set(true)}
                className={classes.secondaryButton}
              >
                Criar conta
              </Button>
            </Grid>
          </Grid>

          <Grid item>
            <Typography className={classes.textButton}>
              Esqueceu sua senha?
            </Typography>
          </Grid>
        </Grid>
        {state.loading && <DefaultLinerLoading />}
      </form>
    </div>
  )
}
SignInMobile.propTypes = {
  set: PropTypes.func,
  dialog: PropTypes.func,
}
export default SignInMobile
