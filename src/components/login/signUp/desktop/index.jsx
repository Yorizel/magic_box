import React from 'react'
import { Button, Fade, Grid, TextField, Typography } from '@material-ui/core'
import DefaultLogo from '../../../@global/logo'
import PropTypes from 'prop-types'
import { useSingUpController } from '../../../../controllers/SignUpController'
import DefaultLinerLoading from '../../../@global/loading'

function SignUpDesktop({ set }) {
  const {
    inputRef,
    handleSubmit,
    submit,
    classes,
    errors,
    state,
  } = useSingUpController({
    set,
  })
  return (
    <Fade mountOnEnter unmountOnExit in={true}>
      <form style={{ minHeight: 538 }} onSubmit={handleSubmit(submit)}>
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
            direction={'row'}
            alignItems={'center'}
            justify={'space-evenly'}
            container
          >
            <Grid className={classes.nameInputField} item>
              <TextField
                {...inputRef('firstName').rest}
                fullWidth
                required
                label={'Primeiro nome'}
                error={!!errors.firstName}
                helperText={errors.firstName ? errors.firstName.message : null}
                inputRef={inputRef('firstName').ref}
              />
            </Grid>
            <Grid className={classes.nameInputField} item>
              <TextField
                {...inputRef('lastName').rest}
                fullWidth
                required
                label={'Ultimo nome'}
                error={!!errors.lastName}
                helperText={errors.lastName ? errors.lastName.message : null}
                inputRef={inputRef('lastName').ref}
              />
            </Grid>
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
                helperText={errors.email ? errors.email.message : null}
                inputRef={inputRef('email').ref}
              />
            </Grid>
            <Grid className={classes.inputField} item>
              <TextField
                {...inputRef('password').rest}
                fullWidth
                type={'password'}
                required
                label={'Senha'}
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : null}
                inputRef={inputRef('password').ref}
              />
            </Grid>
            <Grid className={classes.inputField} item>
              <TextField
                {...inputRef('passwordConfirmation').rest}
                fullWidth
                required
                label={'Confirme sua senha'}
                type={'password'}
                error={!!errors.passwordConfirmation}
                helperText={
                  errors.passwordConfirmation
                    ? errors.passwordConfirmation.message
                    : null
                }
                inputRef={inputRef('passwordConfirmation').ref}
              />
            </Grid>
          </Grid>

          <Button
            type={'submit'}
            variant={'outlined'}
            onClick={() => console.log('chegou aqui')}
            className={classes.button}
          >
            Criar conta
          </Button>

          <Grid item>
            <Typography
              onClick={() => set(false)}
              className={classes.textButton}
            >
              Já tem uma conta?
            </Typography>
          </Grid>
        </Grid>
        {state.loading && <DefaultLinerLoading />}
      </form>
    </Fade>
  )
}
SignUpDesktop.propTypes = {
  set: PropTypes.func,
}
export default SignUpDesktop
