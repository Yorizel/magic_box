import React, { useEffect, useCallback, useState } from 'react'
import PropTypes from 'prop-types'

export const AuthContext = React.createContext({
  auth: { token: '', isLogged: false, firstName: '', lastName: '', role: '' },
  setAuth: ({
    token = PropTypes.string,
    isLogged = PropTypes.bool,
    firstName = PropTypes.string,
    lastName = PropTypes.string,
    role = PropTypes.string,
  }) => {},
})

function AuthProvider({ children }) {
  const [auth, setAuth] = useState({
    token: '',
    isLogged: false,
    firstName: '',
    lastName: '',
    role: '',
  })

  const getUserInfo = useCallback(async () => {
    const userToken = await sessionStorage.getItem('token')
    const firstName = await sessionStorage.getItem('firstName')
    const lastName = await sessionStorage.getItem('lastName')
    const userRole = await sessionStorage.getItem('userRole')

    if (userToken) {
      return setAuth((prevState) => ({
        ...prevState,
        token: userToken,
        isLogged: true,
        firstName: firstName,
        lastName: lastName,
        role: userRole,
      }))
    }
  }, [])

  const setUserInfo = useCallback(
    async (token = '', firstName = '', lastName = '', role = '') => {
      await sessionStorage.setItem('token', token)
      await sessionStorage.setItem('firstName', firstName)
      await sessionStorage.setItem('lastName', lastName)
      await sessionStorage.setItem('userRole', role)
    },
    []
  )

  useEffect(() => {
    getUserInfo()
  }, [getUserInfo])
  useEffect(() => {
    setUserInfo(auth.token, auth.firstName, auth.lastName, auth.role)
  }, [auth, setUserInfo])

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}
AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
}

export default AuthProvider
