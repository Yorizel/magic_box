import { createStyles, makeStyles } from '@material-ui/core'

export default makeStyles((theme) =>
  createStyles({
    avatarTitleDesktop: {
      color: theme.palette.primary.contrastText,
      letterSpacing: '0.01em',
      fontWeight: 500,
    },
    avatarSubTitleDesktop: {
      color: theme.palette.primary.lightText,

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
