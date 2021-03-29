import SignIn from '../../components/login/sign_in/mobile'
import { Box } from '@material-ui/core'
import { LoginBg } from '../../assets'
import Footer from '../../components/landing/footer'
export default function LoginPage() {
    return (
        <Box
            component={'div'}
            style={{
                backgroundImage: `url(${LoginBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                overflow: 'hidden',
            }}
        >
            <SignIn />
            <Footer />
        </Box>
    )
}
