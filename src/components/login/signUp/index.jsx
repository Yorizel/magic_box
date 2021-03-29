import { Button, Fade, Grid, TextField, Typography } from '@material-ui/core'
import useStyles from './style'
import DefaultLogo from '../../@global/logo'

export default function SignUpDesktop({ set }) {
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
                        direction={'row'}
                        alignItems={'center'}
                        justify={'space-evenly'}
                        container
                    >
                        <Grid className={classes.nameInputField} item>
                            <TextField fullWidth label={'Primeiro nome'} />
                        </Grid>
                        <Grid className={classes.nameInputField} item>
                            <TextField fullWidth label={'Ultimo nome'} />
                        </Grid>
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
                        <Grid className={classes.inputField} item>
                            <TextField fullWidth label={'Confirme sua senha'} />
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Button className={classes.button}>Criar conta</Button>
                    </Grid>

                    <Grid item>
                        <Typography
                            onClick={() => set(false)}
                            className={classes.textButton}
                        >
                            Já tem uma conta?
                        </Typography>
                    </Grid>
                </Grid>
            </form>
        </Fade>
    )
}
