import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { MuiThemeProvider } from '@material-ui/core'
import theme from './plugins/material_ui'
import AuthProvider from './context/authContext'
import SnackProvider from './context/snackContext'

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <AuthProvider>
        <SnackProvider>
          <App />
        </SnackProvider>
      </AuthProvider>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
