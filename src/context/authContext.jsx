import React, { useEffect, useCallback, useState } from 'react'

export const AuthContext = React.createContext({
    auth: { token: '', isLogged: false, first_name: '', last_name: '' },
    setAuth: () => {},
})

export default function AuthProvider({ children }) {
    const [auth, setAuth] = useState({
        token: '',
        isLogged: false,
        first_name: '',
        last_name: '',
    })

    const get_user_token_and_username = useCallback(async () => {
        const user_token = await sessionStorage.getItem('token')
        const first_name = await sessionStorage.getItem('first_name')
        const last_name = await sessionStorage.getItem('last_name')
        if (user_token) {
            return setAuth({
                token: user_token,
                isLogged: true,
                first_name: first_name,
                last_name: last_name,
            })
        }
    }, [])

    const set_user_info = useCallback(
        async (token = '', first_name = '', last_name = '') => {
            await sessionStorage.setItem('token', token)
            await sessionStorage.setItem('first_name', first_name)
            await sessionStorage.setItem('last_name', last_name)
        },
        []
    )

    useEffect(() => {
        get_user_token_and_username().then()
    }, [get_user_token_and_username])
    useEffect(() => {
        set_user_info(auth.token, auth.first_name, auth.last_name).then()
    }, [auth, set_user_info])

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}
