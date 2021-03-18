import { Grid, IconButton, Typography } from '@material-ui/core'
import Logo from '../../../../assets/logo.png'
import useStyles from './style'
import { Instagram, YouTube } from '@material-ui/icons'


export default function MobileFooter() {
    const classes = useStyles()

    return (
        <>
            <Grid spacing={1} direction={'row'} justify={'center'} alignItems={'center'} alignContent={'center'}
                  container>
                <Grid item>
                    <img alt={'deu ruim'} src={Logo} className={classes.logoImage} />
                </Grid>
                <Grid item>
                    <Typography className={classes.logoText}>
                        MagicBox
                    </Typography>
                </Grid>
            </Grid>

                <Grid item>
                    <IconButton href={'https://www.instagram.com/magicbox.tv/'}>
                        <Instagram />
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton>
                        <YouTube />
                    </IconButton>
                </Grid>



        </>
    )
}