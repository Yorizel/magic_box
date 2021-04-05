import React from 'react'
import { Button, Fade, Grid, TextField, Typography } from '@material-ui/core'
import DefaultLogo from '../../../@global/logo'
import PropTypes from 'prop-types'
import { useSignInController } from '../../../../controllers/SignInController'
import DefaultLinerLoading from '../../../@global/loading'

function SignInDesktop({ set, dialog }) {
  const {
    errors,
    handleSubmit,
    inputRef,
    submit,
    classes,
    state,
  } = useSignInController({ dialog })
  return (
    <Fade mountOnEnter unmountOnExit in={true}>
      <form
        onSubmit={handleSubmit(submit)}
        style={{ minHeight: 488 }}
        noValidate
      >
        <Grid
          justify={'space-evenly'}
          alignItems={'center'}
          alignContent={'center'}
          direction={'column'}
          container
          className={classes.root}
        >
          <Grid item>
            <DefaultLogo size={60} fontSize={'2.20rem'} />
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
    </Fade>
  )
}
SignInDesktop.propTypes = {
  set: PropTypes.func,
  dialog: PropTypes.func,
}
export default SignInDesktop
