import { Box, Fade, Grow, Slide, useMediaQuery } from '@material-ui/core'
import { useState } from 'react'
import SignInDesktop from './sign_in/desktop'
import SignUpDesktop from './signUp'

export default function LoginComponent() {
    const responsive = useMediaQuery((theme) => theme.breakpoints.down('md'))
    const [signUp, setSignUp] = useState(false)
    return (
        <Box>
            {!signUp ? (
                <SignInDesktop set={(value) => setSignUp(value)} />
            ) : (
                <SignUpDesktop set={(value) => setSignUp(value)} />
            )}
        </Box>
    )
}
