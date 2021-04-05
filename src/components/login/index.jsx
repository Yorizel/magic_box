import { Box } from '@material-ui/core'
import React, { useState } from 'react'
import SignInDesktop from './sign_in/desktop'
import SignUpDesktop from './signUp/desktop'
import SignUpMobile from './signUp/mobile'
import SignInMobile from './sign_in/mobile'
import PropTypes from 'prop-types'
export const MobileLogin = () => {
  const [signUp, setSignUp] = useState(false)
  return (
    <Box>
      {!signUp ? (
        <SignInMobile set={(value) => setSignUp(value)} />
      ) : (
        <SignUpMobile set={(value) => setSignUp(value)} />
      )}
    </Box>
  )
}
function LoginComponent({ dialog }) {
  const [signUp, setSignUp] = useState(false)
  return (
    <Box>
      {!signUp ? (
        <SignInDesktop dialog={dialog} set={(value) => setSignUp(value)} />
      ) : (
        <SignUpDesktop set={(value) => setSignUp(value)} />
      )}
    </Box>
  )
}
LoginComponent.propTypes = {
  dialog: PropTypes.func,
}
export default LoginComponent
