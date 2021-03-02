import {makeStyles} from '@material-ui/core'

export default makeStyles(() => ({
    root:{
        maxWidth: 300,
        height: '100%',
        backgroundColor: '#F7FAFC',
        borderRadius: 15,
        boxShadow: '1px 5px 4px rgba(192, 189, 189, 0.4)'
    },
    media:{
        height: '30%',
        width: '100%',
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
        fontSize: '1.80rem',
        wordBreak: "break-word",
        display: 'inline-block',
    },
    bodyText:{

        color: '#718096',
        fontSize: '1.00rem',
        maxWidth: '100%',
        wordBreak: "break-word",
        display: 'inline-block',
    }
}))