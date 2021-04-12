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
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import { DefaultMenuAvatar } from '../../../../../@global/avatar'
export const useMenuListController = ({ handleClick }) => {
  const { auth, setAuth } = useContext(AuthContext)
  const history = useHistory()

  const logoutHandler = () => {
    return setAuth({
      token: '',
      isLogged: false,
      first_name: '',
      last_name: '',
    })
  }
  const classes = useStyles()
  function Options({ item }) {
    return (
      <>
        <ListItem onClick={item.func} className={'focus:outline-none'} button>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText>
            <Typography className={classes.textButton}>{item.text}</Typography>
          </ListItemText>
          <ListItemIcon>
            <ArrowRight style={{ marginLeft: 'auto' }} />
          </ListItemIcon>
        </ListItem>
      </>
    )
  }

  const data = () => {
    const writerData = [
      {
        id: 1,
        icon: <DefaultMenuAvatar />,
        text: null,
        func: handleClick,
      },
      {
        id: 2,
        icon: <Dashboard />,
        text: 'Dashboard',
        func: () => history.push('/dashboard'),
      },
      { id: 3, icon: <ExitToApp />, text: 'Logout', func: logoutHandler },
    ]
    const adminData = [
      {
        id: 1,
        icon: <DefaultMenuAvatar />,
        text: null,
        func: handleClick,
      },
      {
        id: 2,
        icon: <Dashboard />,
        text: 'Admin panel',
        func: () => history.push('/admin-panel'),
      },
      { id: 3, icon: <ExitToApp />, text: 'Logout', func: logoutHandler },
    ]
    const userData = [
      {
        id: 1,
        icon: <DefaultMenuAvatar />,
        text: null,
        func: handleClick,
      },
      { id: 2, icon: <ExitToApp />, text: 'Logout', func: logoutHandler },
    ]
    const unAuthData = [
      {
        id: 1,
        icon: <DefaultMenuAvatar />,
        text: null,
        func: handleClick,
      },
    ]
    if (auth.isLogged) {
      switch (auth.role) {
        case 'WRITER':
          return writerData.map((item) => <Options key={item.id} item={item} />)
        case 'ADMIN':
          return adminData.map((item) => <Options key={item.id} item={item} />)
        default:
          return userData.map((item) => <Options key={item.id} item={item} />)
      }
    }
    return unAuthData.map((item) => <Options key={item.id} item={item} />)
  }
  Options.propTypes = {
    item: PropTypes.object.isRequired,
  }
  return {
    data,
    auth,
    classes,
  }
}
