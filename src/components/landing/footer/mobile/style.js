import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  logoImage: {
    maxWidth: '10vw',
    '@media screen and (min-width: 700px)': {
      maxWidth: '5vw',
    },
  },
  logoText: {
    fontFamily: 'GlacialIndifferenceRegular',
    color: theme.palette.primary.contrastText,
    letterSpacing: '0.25em',
    textTransform: 'uppercase',
    fontWeight: 700,
    fontSize: '1.10rem',
  },
  icon: {
    maxWidth: '10vw',
  },
}))
