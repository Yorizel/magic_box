import { AppBar, Toolbar } from '@material-ui/core'
import useSyles from './style'
import MobileNavbar from './mobile'
import DesktopNavbar from './desktop'
import { useResponsive } from '../../../hooks/useResponsive'

export default function Navbar() {
    const { responsive} = useResponsive()
    const classes = useSyles()
    return (
        <AppBar position={'static'} color={'transparent'} className={classes.root} >
            <Toolbar >

                { responsive ? <MobileNavbar/> : <DesktopNavbar/>}

            </Toolbar>
        </AppBar>
    )
}