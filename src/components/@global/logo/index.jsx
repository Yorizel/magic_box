import { Grid, Typography } from '@material-ui/core'
import { Logo } from '../../../assets'

export default function DefaultLogo({ size, fontSize }) {
    return (
        <Grid
            direction={'row'}
            alignContent={'center'}
            justify={'center'}
            alignItems={'center'}
            container
        >
            <Grid item>
                <img src={Logo} alt={'Logo'} style={{ maxWidth: size }} />
            </Grid>
            <Grid item>
                <Typography
                    style={{
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        letterSpacing: '0.15em',
                        fontFamily: 'GlacialIndifferenceRegular',
                        fontSize: fontSize,
                    }}
                >
                    MagicBox
                </Typography>
            </Grid>
        </Grid>
    )
}
