import { makeStyles } from '@material-ui/core'

export default makeStyles(() => ({
  root: {
    marginTop: 15,
    overflow: 'hidden',
  },
  img: {
    height: '40vh',
    width: '60vw',
    objectFit: 'cover',
    objectPosition: 'center top',
    borderRadius: 15,
  },
  title: { fontWeight: 'bold', fontSize: '4.00rem' },
  date: { fontSize: '1.25rem' },
  descriptionContainer: {
    maxWidth: '60%',
  },
  description: {
    wordBreak: 'break-word',
    marginTop: 15,
    fontSize: '1.30rem',
  },
  writer: {
    fontSize: '1.50rem',
    fontWeight: 'bold',
  },
}))
