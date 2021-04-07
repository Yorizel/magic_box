import useStyles from '../components/login/signUp/desktop/style'
import { useContext, useState } from 'react'
import { SnackContext } from '../context/snackContext'
import { UserDAO } from '../DAO/UserDAO'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { singUpValidationSchema } from '../components/login/validation'

export const useSingUpController = ({ set }) => {
  const classes = useStyles()
  const [state, setState] = useState({
    loading: false,
  })
  const { setSnack } = useContext(SnackContext)
  const controller = new UserDAO()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(singUpValidationSchema),
  })
  const inputRef = (name) => {
    const { ref, ...rest } = register(String(name))
    return { ref, rest }
  }
  const submit = async (data) => {
    try {
      setState((prevState) => ({ ...prevState, loading: true }))
      const res = await controller.create({ data })
      console.log(res)
      switch (res.error) {
        case true: {
          setSnack({
            open: true,
            message: 'Email já cadastrado',
            color: 'error',
          })
          break
        }
        default: {
          setSnack({
            open: true,
            message: 'Conta criada com sucesso',
            color: 'success',
          })
          set(false)
        }
      }
    } finally {
      setState((prevState) => ({ ...prevState, loading: false }))
    }
  }
  return {
    submit,
    inputRef,
    handleSubmit,
    classes,
    errors,
    state,
  }
}
