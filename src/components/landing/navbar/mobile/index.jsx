import { Drawer, Grid, IconButton, Typography } from '@material-ui/core'
import Logo from '../../../../assets/logo.png'
import { Menu } from '@material-ui/icons'
import useStyles from './style'
import { useEffect, useState } from 'react'
import MobileDrawer from './drawer'

export default function MobileNavbar(){
    const classes = useStyles()
    const [drawer, setDrawer] = useState(false)

    useEffect(() => {
        if(window.innerWidth > 900) return setDrawer(false)
    }, [])
    return(
        <>
            <Grid spacing={1} direction={'row'} justify={'center'} alignItems={'center'} container>
                <Grid item>
                    <IconButton onClick={() => setDrawer(true)}>
                        <Menu/>
                    </IconButton>
                </Grid>
                <Grid item>
                    <img alt={'deu ruim'} src={Logo} className={classes.logoImage} />
                </Grid>
                <Grid item>
                    <Typography className={classes.logoText}>
                        MagicBox
                    </Typography>
                </Grid>
            </Grid>


        <Drawer open={drawer}  onClose={() => setDrawer(false)} >
                <MobileDrawer/>
        </Drawer>
        </>
    )
}