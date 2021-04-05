import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  root: {
    maxWidth: 305,
    height: 390,

    borderRadius: 15,
    boxShadow: '1px 5px 4px rgba(192, 189, 189, 0.4)',
    transition: ['0.5s'],
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      transform: 'scale(1.04, 1.04)',
    },

    '@media screen and (max-width: 360px)': {
      maxWidth: '90vw',
    },
  },
  media: {},
  textDate: {
    marginTop: 'auto',
    color: '#718096',
    fontSize: '1.00rem',
    maxWidth: '100%',
    wordBreak: 'break-word',
    display: 'inline-block',
  },
  content: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '100%',
  },
  buttonText: {
    wordBreak: 'break-word',
    display: 'inline-block',
    fontSize: '1.15rem',

    color: '#2D3748',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: ['0.5s'],
    '&:hover': {
      transform: 'scale(1.05, 1.05)',
    },
  },
  titleText: {
    color: '#2D3748',
    fontWeight: 'bold',
    fontSize: '1.80rem',
    wordBreak: 'break-word',
    display: 'inline-block',
  },
  bodyText: {
    lineClamp: 2,
    textOverflow: 'ellipsis',
    color: '#718096',
    fontSize: '1.10rem',
    maxWidth: '100%',

    wordBreak: 'break-word',
  },
}))
