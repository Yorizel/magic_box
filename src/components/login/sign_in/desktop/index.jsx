import { Button, Fade, Grid, TextField, Typography } from '@material-ui/core'
import useStyles from './style'
import DefaultLogo from '../../../@global/logo'

export default function SignInDesktop({ set }) {
    const classes = useStyles()
    return (
        <Fade mountOnEnter unmountOnExit in={true}>
            <form noValidate>
                <Grid
                    justify={'space-evenly'}
                    alignItems={'center'}
                    alignContent={'center'}
                    direction={'column'}
                    container
                    className={classes.root}
                >
                    <Grid item>
                        <DefaultLogo size={60} fontSize={'2.20rem'} />
                    </Grid>

                    <Grid
                        direction={'column'}
                        alignContent={'center'}
                        alignItems={'center'}
                        justify={'center'}
                        spacing={2}
                        container
                    >
                        <Grid className={classes.inputField} item>
                            <TextField fullWidth label={'Email'} />
                        </Grid>
                        <Grid className={classes.inputField} item>
                            <TextField fullWidth label={'Senha'} />
                        </Grid>
                    </Grid>
                    <Grid
                        justify={'space-evenly'}
                        alignItems={'center'}
                        direction={'row'}
                        container
                    >
                        <Grid item>
                            <Button
                                variant={'outlined'}
                                className={classes.button}
                            >
                                Entrar
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                onClick={() => set(true)}
                                className={classes.secondaryButton}
                            >
                                Criar conta
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Typography className={classes.textButton}>
                            Esqueceu sua senha?
                        </Typography>
                    </Grid>
                </Grid>
            </form>
        </Fade>
    )
}
