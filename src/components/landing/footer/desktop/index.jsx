import { Grid, IconButton, Typography } from '@material-ui/core'
import { Logo } from '../../../../assets'
import { Instagram, YouTube } from '@material-ui/icons'
import useStyles from './style'

export default function DesktopFooter() {
    const classes = useStyles()
    return (
        <>
            <Grid
                spacing={2}
                direction={'row'}
                justify={'center'}
                alignItems={'center'}
                container
            >
                <Grid item>
                    <img
                        alt={'deu ruim'}
                        src={Logo}
                        className={classes.logoImage}
                    />
                </Grid>
                <Grid item>
                    <Typography className={classes.logoText}>
                        MagicBox
                    </Typography>
                </Grid>
            </Grid>
            <Grid alignItems={'center'} justify={'center'} container>
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
            </Grid>
        </>
    )
}
