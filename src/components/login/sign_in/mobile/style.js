import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  rootContainer: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  root: {
    backgroundColor: theme.palette.primary.light,
    overflow: 'hidden',
    minHeight: '50vh',
    minWidth: '100vw',
    height: 'auto',
  },
  inputField: {
    width: '80%',
  },
  button: {
    border: '1px solid #783030',
    borderRadius: 15,
    transition: ['0.3s'],
    fontFamily: 'Montserrat',
    '&:hover': {
      backgroundColor: theme.palette.primary.red,
      color: theme.palette.primary.light,
    },
  },
  secondaryButton: {
    borderRadius: 10,
    transition: ['0.5s'],
    fontFamily: 'Montserrat',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.light,
    },
  },
  textButton: {
    transition: ['0.1s'],
    fontFamily: 'Montserrat',

    color: theme.palette.primary.contrastText,
    '&:hover': {
      fontWeight: 'bold',
    },
    cursor: 'pointer',
  },
}))
