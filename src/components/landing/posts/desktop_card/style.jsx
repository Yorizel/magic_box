import { makeStyles } from '@material-ui/styles'
import { createStyles } from '@material-ui/core'

export default makeStyles(() => createStyles({
    root:{
        maxWidth: '65vw',
        minWidth: '50%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#F7FAFC',
        minHeight: 200,
        maxHeight: ' 35vh',
        overflow: 'hidden',
        borderRadius: 15,
        boxShadow: '1px 5px 4px rgba(192, 189, 189, 0.4)',
        transition: ['0.5s'],
        '&:hover':{
            background: '#F3F3F3',
            transform: 'scale(1.05, 1.05)',
        }
    },
    content:{
        overflow: "hidden", textOverflow: "ellipsis", maxWidth: '25vw'
    },
    media:{


        maxWidth: '55%',

        borderRadius: 8,

    },
    textDate:{
        color: '#718096',
        fontSize: '1.00rem',
        maxWidth: '100%',
        wordBreak: "break-word",
        display: 'inline-block',
    },
    buttonText:{
        wordBreak: "break-word",
        display: 'inline-block',
        fontSize: '1.15rem',
        color: '#2D3748',
        cursor: 'pointer',
        fontWeight: 'bold',
        transition: ['0.5s'],
        '&:hover':{
            transform: 'scale(1.05, 1.05)',
        }
    },
    titleText:{
        color: '#2D3748',
        fontWeight: 'bold',
        fontSize: '3.00rem',
        wordBreak: "break-word",
        display: 'inline-block',
    },
    bodyText:{

        lineClamp: 2,
        textOverflow: 'ellipsis',
        color: '#718096',
        fontSize: '1.25rem',
        maxWidth: '100%',

        wordBreak: "break-word",

    }

}))