import { makeStyles } from '@material-ui/core'

export default makeStyles(() => ({
  root: {
    marginTop: 15,
    overflow: 'hidden',
  },
  img: {
    height: '30vh',
    width: '90vw',
    objectFit: 'cover',
    objectPosition: 'center top',
    borderRadius: 15,
  },
  desktopImg: {
    height: '40vh',
    width: '60vw',
    objectFit: 'cover',
    objectPosition: 'center top',
    borderRadius: 15,
  },

  writer: {
    fontSize: '1.15rem',
    fontWeight: 'bold',
  },
  date: {
    fontSize: '1.10rem',
  },
  descriptionContainer: {
    maxWidth: '90%',
  },
  description: {
    wordBreak: 'break-word',
    marginTop: 15,
    fontSize: '1.25rem',
  },
}))
