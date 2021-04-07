import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  logoImage: {
    maxWidth: 40,
  },
  logoText: {
    fontFamily: 'GlacialIndifferenceRegular',
    color: theme.palette.primary.contrastText,
    letterSpacing: '0.25em',
    textTransform: 'uppercase',
    fontWeight: 700,
    fontSize: '1.25rem',
  },
}))
