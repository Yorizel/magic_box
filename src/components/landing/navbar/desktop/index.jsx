import { Grid, IconButton, InputBase, Typography } from '@material-ui/core'
import Logo from '../../../../assets/logo.png'
import { Instagram, Search } from '@material-ui/icons'
import useStyles from './style'

export default function DesktopNavbar(){
    const classes = useStyles()
    return(
        <>
            <Grid spacing={2} direction={'row'} justify={'center'} alignItems={'center'} container>
                <Grid item>
                    <img alt={'deu ruim'} src={Logo} className={classes.logoImage} />
                </Grid>
                <Grid item>
                    <Typography className={classes.logoText}>
                        MagicBox
                    </Typography>
                </Grid>
            </Grid>
            <Grid direction={'row'} justify={'center'} alignItems={'center'} container>
                <Grid item>
                    <IconButton>
                        <Search />
                    </IconButton>
                </Grid>
                <Grid item>
                    <InputBase
                        placeholder={'Pesquise aqui'}
                    />
                </Grid>
            </Grid>
            <Grid alignItems={'center'} justify={'space-evenly'} container>
                <Grid item>
                    <Typography className={classes.textButton}>
                        Home
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography className={classes.textButton}>
                        Seções
                    </Typography>
                </Grid>
                <Grid item>
                    <IconButton>
                        <Instagram />
                    </IconButton>
                </Grid>
            </Grid>
        </>
    )
}