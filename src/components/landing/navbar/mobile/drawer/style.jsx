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
        height: 80,
        width: 80,
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
