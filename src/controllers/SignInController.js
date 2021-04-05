import { UserDAO } from '../DAO/UserDAO'
import useStyles from '../components/login/sign_in/desktop/style'
import { useContext, useState } from 'react'
import { AuthContext } from '../context/authContext'
import { SnackContext } from '../context/snackContext'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { signInValidationSchema } from '../components/login/validation'

export const useSignInController = ({ dialog }) => {
  const [state, setState] = useState({
    loading: false,
  })
  const controller = new UserDAO()
  const classes = useStyles()
  const { setAuth } = useContext(AuthContext)
  const { setSnack } = useContext(SnackContext)
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInValidationSchema),
  })
  const inputRef = (name) => {
    const { ref, ...rest } = register(String(name))
    return { ref, rest }
  }
  const submit = async (data) => {
    setState((prevState) => ({ ...prevState, loading: true }))
    const res = await controller.find({ data })

    switch (res.error) {
      case true: {
        setSnack({
          open: true,
          message: 'Email ou senha errados',
          color: 'error',
        })
        setState((prevState) => ({ ...prevState, loading: false }))
        break
      }
      default: {
        setAuth({
          token: res.data.token,
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          isLogged: true,
          role: res.data.role,
        })
        setState((prevState) => ({ ...prevState, loading: false }))
        setSnack({
          open: true,
          message: `Seja bem vindo de volta ${res.data.firstName}`,
          color: 'success',
        })
        return dialog(false)
      }
    }
  }
  return {
    submit,
    inputRef,
    handleSubmit,

    errors,
    classes,
    state,
  }
}
