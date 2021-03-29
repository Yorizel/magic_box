import { Button, Box, Grid, TextField, Typography } from '@material-ui/core'
import { Logo } from '../../../../assets'

export default function SignInMobile() {
    return (
        <Grid
            justify={'center'}
            alignItems={'center'}
            alignContent={'center'}
            direction={'column'}
            container
            style={{
                minHeight: '100vh',
                minWidth: '100vw',
            }}
        >
            <Box
                style={{
                    background: 'rgba(233, 226, 226, 0.99)',
                    boxShadow: '0px 4px 4px rgba(233, 226, 226, 0.25)',
                    borderRadius: 24,
                    width: '90%',
                    height: '100%',
                }}
            >
                <Grid
                    direction={'row'}
                    alignContent={'center'}
                    justify={'center'}
                    alignItems={'center'}
                    container
                >
                    <Grid item>
                        <img src={Logo} alt={'alou'} style={{ maxWidth: 40 }} />
                    </Grid>
                    <Grid item>
                        <Typography
                            style={{
                                fontFamily: 'GlacialIndifferenceRegular',
                                fontSize: '2.00rem',
                            }}
                        >
                            MagicBox
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    direction={'column'}
                    alignContent={'center'}
                    alignItems={'center'}
                    justify={'center'}
                    container
                >
                    <Grid item>
                        <TextField label={'email'} />
                    </Grid>
                    <Grid item>
                        <TextField label={'senha'} />
                    </Grid>
                </Grid>
                <Grid
                    justify={'center'}
                    alignItems={'center'}
                    direction={'row'}
                    container
                >
                    <Grid item>
                        <Button>Entrar</Button>
                    </Grid>
                    <Grid item>
                        <Button>Criar conta</Button>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    )
}
