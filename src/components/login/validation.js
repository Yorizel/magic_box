import * as yup from 'yup'

export const singUpValidationSchema = yup.object().shape({
  firstName: yup
    .string('Insira seu primeiro nome')
    .required('Este campo é obrigatorio'),

  lastName: yup
    .string('Insira seu ultimo nome')
    .required('Este campo é obrigatorio'),

  email: yup
    .string('Insira seu email')
    .email('Insira um email valido')
    .required('Este campo é obrigatorio'),

  password: yup
    .string('Insira sua senha')
    .required('Este campo é obrigatorio')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Precisa conter no mínimo 8 letras, Uma maiúscula, uma minuscula, Um numero e um caracter especial'
    )
    .min('8', 'Precisa conter no minimo 8 letras'),

  passwordConfirmation: yup
    .string('Confirme sua senha')
    .oneOf([yup.ref('password'), null], 'As senhas não batem')
    .required('Este campo é obrigatorio'),
})

export const signInValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Insira um email valido')
    .required('Este campo é obrigatorio'),
  password: yup.string().required('Este campo é obrigatorio'),
})
