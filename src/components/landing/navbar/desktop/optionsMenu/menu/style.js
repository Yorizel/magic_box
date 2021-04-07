import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  rootContainer: {
    paddingLeft: 3,
  },
  itemContainer: {
    width: '100%',
  },
  arrowIcon: {
    marginLeft: 'auto',
  },
  textButton: {
    color: theme.palette.primary.contrastText,
    fontSize: '1.25rem',
  },
}))
