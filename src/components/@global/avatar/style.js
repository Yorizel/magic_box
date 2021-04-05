import { createStyles, makeStyles } from '@material-ui/core'

export default makeStyles(() =>
  createStyles({
    avatarTitleDesktop: {
      color: 'black',
      letterSpacing: '0.01em',
      fontWeight: 500,
      fontSize: '1.15rem',
    },
    avatarSubTitleDesktop: {
      color: '#AEA6A6',

      fontWeight: 500,
      fontSize: '0.80rem',
    },
    avatarTitle: {
      color: 'black',
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      fontWeight: 600,
      fontSize: '0.90rem',
    },
    avatar: {
      height: 45,
      width: 45,
    },
  })
)
