import {makeStyles} from '@material-ui/core'

export default makeStyles(() => ({
    root:{
        maxWidth: '80vw',
        minWidth: '50%',
        width: '100%',
        display: 'flex',
        backgroundColor: '#F7FAFC',
        minHeight: 200,
        borderRadius: 15,
        boxShadow: '1px 5px 4px rgba(192, 189, 189, 0.4)',

    },
    content:{
        overflow: "hidden", textOverflow: "ellipsis", maxWidth: '30vw'
    },
    media:{
        height: '100%',
        width: '100%',
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
        fontWeight: 'bold'
    },
    titleText:{
        color: '#2D3748',
        fontWeight: 'bold',
        fontSize: '3.00rem',
        wordBreak: "break-word",
        display: 'inline-block',
    },
    bodyText:{
        lineClamp: 4,
        textOverflow: 'ellipsis',
        color: '#718096',
        fontSize: '1.25rem',
        maxWidth: '100%',
        wordBreak: "break-word",
        display: 'inline-block',
    }
}))