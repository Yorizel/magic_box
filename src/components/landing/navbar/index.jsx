import { AppBar, Toolbar, useMediaQuery } from '@material-ui/core'
import useStyles from './style'
import MobileNavbar from './mobile'
import DesktopNavbar from './desktop'

export default function Navbar() {
    const responsive = useMediaQuery((theme) => theme.breakpoints.down('md'))

    const classes = useStyles()
    return (
        <AppBar
            position={responsive ? 'relative' : 'static'}
            color={'transparent'}
            style={responsive ? { backgroundColor: 'white' } : undefined}
            className={classes.root}
        >
            <Toolbar>
                {responsive ? <MobileNavbar /> : <DesktopNavbar />}
            </Toolbar>
        </AppBar>
    )
}
