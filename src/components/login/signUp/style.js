import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.light,
        overflow: 'hidden',
        minHeight: 430,
        minWidth: 430,
        height: 'auto',
    },
    inputField: {
        width: '80%',
    },
    nameInputField: {
        width: '34%',
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

    textButton: {
        fontFamily: 'Montserrat',
        color: theme.palette.primary.contrastText,
        cursor: 'pointer',
    },
}))
