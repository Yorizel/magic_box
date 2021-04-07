import React, { useContext } from 'react'
import { AuthContext } from '../../../../../../context/authContext'
import useStyles from './style'
import { ArrowRight, Dashboard, ExitToApp } from '@material-ui/icons'
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core'

export const useMenuListController = () => {
  const { auth, setAuth } = useContext(AuthContext)

  const logoutHandler = () => {
    return setAuth({
      token: '',
      isLogged: false,
      first_name: '',
      last_name: '',
    })
  }
  const classes = useStyles()
  const data = () => {
    const writerData = [
      { id: 1, icon: <Dashboard />, text: 'Dashboard', func: null },
      { id: 2, icon: <ExitToApp />, text: 'Logout', func: logoutHandler },
    ]
    const adminData = [
      { id: 1, icon: <Dashboard />, text: 'Admin panel', func: null },
      { id: 2, icon: <ExitToApp />, text: 'Logout', func: logoutHandler },
    ]
    const userData = [
      { id: 1, icon: <ExitToApp />, text: 'Logout', func: logoutHandler },
    ]
    switch (auth.role) {
      case 'WRITER':
        return writerData.map((item) => (
          <ListItem key={item.id} onClick={item.func} button>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>
              <Typography className={classes.textButton}>
                {item.text}
              </Typography>
            </ListItemText>
            <ListItemIcon>
              <ArrowRight style={{ marginLeft: 'auto' }} />
            </ListItemIcon>
          </ListItem>
        ))
      case 'ADMIN':
        return adminData.map((item) => (
          <ListItem key={item.id} onClick={item.func} button>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>
              <Typography className={classes.textButton}>
                {item.text}
              </Typography>
            </ListItemText>
            <ListItemIcon>
              <ArrowRight style={{ marginLeft: 'auto' }} />
            </ListItemIcon>
          </ListItem>
        ))
      default:
        return userData.map((item) => (
          <ListItem key={item.id} onClick={item.func} button>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>
              <Typography className={classes.textButton}>
                {item.text}
              </Typography>
            </ListItemText>
            <ListItemIcon>
              <ArrowRight style={{ marginLeft: 'auto' }} />
            </ListItemIcon>
          </ListItem>
        ))
    }
  }
  return {
    data,
    auth,
    classes,
  }
}
