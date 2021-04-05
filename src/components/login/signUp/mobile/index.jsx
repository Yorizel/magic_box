import { Button, Grid, TextField, Typography } from '@material-ui/core'
import useStyles from './style'
import DefaultLogo from '../../../@global/logo'
import PropTypes from 'prop-types'
import React from 'react'
import { useSingUpController } from '../../../../controllers/SignUpController'
import DefaultLinerLoading from '../../../@global/loading'

function SignUpMobile({ set }) {
  const { inputRef, handleSubmit, submit, errors, state } = useSingUpController(
    {
      set,
    }
  )
  const classes = useStyles()
  return (
    <div className={classes.rootContainer}>
      <form onSubmit={handleSubmit(submit)} noValidate>
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
            item
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

          <Grid item>
            <Button type={'submit'} className={classes.button}>
              Criar conta
            </Button>
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
        {state.loading && <DefaultLinerLoading />}
      </form>
    </div>
  )
}
SignUpMobile.propTypes = {
  set: PropTypes.func,
}
export default SignUpMobile
