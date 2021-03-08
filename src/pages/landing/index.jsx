import Navbar from '../../components/landing/navbar'
import { Box } from '@material-ui/core'
import useStyles from './style'
import HomeSection from '../../components/landing'
import Posts from '../../components/landing/posts'

export default function LandingPage() {
    const classes = useStyles()
    return (

        <Box className={classes.root}>
            <Navbar />

            <HomeSection/>
            <Posts/>
        </Box>


    )
}