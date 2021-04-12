import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  responsiveText: {
    fontSize: '2.50rem',
    fontWeight: 'bold',
    color: theme.palette.primary.contrastText,
    letterSpacing: '0.30rem',
    fontFamily: 'GlacialIndifferenceRegular',
  },
  title: {
    fontWeight: 'bold',
    color: theme.palette.primary.contrastText,
    letterSpacing: '0.50rem',
    fontFamily: 'GlacialIndifferenceRegular',
  },
}))
