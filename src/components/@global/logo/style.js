import { makeStyles } from '@material-ui/styles'

export default makeStyles((theme) => ({
  text: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: theme.palette.primary.contrastText,
    letterSpacing: '0.15em',
    fontFamily: 'GlacialIndifferenceRegular',
  },
}))
