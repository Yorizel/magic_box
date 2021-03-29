import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { MuiThemeProvider } from '@material-ui/core'
import theme from './theme'
import AuthProvider from './context/authContext'

ReactDOM.render(
    <React.StrictMode>
        <MuiThemeProvider theme={theme}>
            <AuthProvider>
                <App />
            </AuthProvider>
        </MuiThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
