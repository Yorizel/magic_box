import { makeStyles } from '@material-ui/core'

export default makeStyles(() => ({
  root: {
    minWidth: '30vw',
    maxWidth: '100vw',
    marginTop: 15,
    '@media screen and (max-width: 500px)': {
      width: '70vw',
    },
  },
  avatar: {
    textTransform: 'none',
    borderRadius: 25,
  },
  searchContainer: {
    width: '100%',
    marginTop: 8,
  },

  avatarTitle: {
    color: 'black',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    fontWeight: 600,
    fontSize: '0.90rem',
  },
  textButton: {
    color: 'black',
    fontSize: '1.25rem',
  },
  icon: {
    maxWidth: 40,
  },
}))
