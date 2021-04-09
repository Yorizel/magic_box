import React, { useContext, useState } from 'react'
import useStyles from './style'
import { useHistory } from 'react-router-dom'
import {
  ArrowDropDown,
  ArrowDropUp,
  ArrowRight,
  Dashboard,
  ExitToApp,
  Instagram,
  ViewHeadline,
} from '@material-ui/icons'
import {
  Collapse,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core'
import MenuList from '../../list'
import { AuthContext } from '../../../../../context/authContext'
import PropTypes from 'prop-types'
export const useDrawerListStructure = () => {
  const [open, setOpen] = useState(false)
  const classes = useStyles()
  const history = useHistory()
  const { auth, setAuth } = useContext(AuthContext)
  const logoutHandler = () => {
    return setAuth({
      token: '',
      isLogged: false,
      first_name: '',
      last_name: '',
    })
  }
  function Options({ item }) {
    return (
      <>
        <ListItem onClick={item.func} button>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText>
            <Typography className={classes.textButton}>{item.title}</Typography>
          </ListItemText>
          <ListItemIcon>
            {item.arrow ? (
              item.arrow
            ) : (
              <ArrowRight style={{ marginLeft: 'auto' }} />
            )}
          </ListItemIcon>
        </ListItem>
        {item.children ? item.children : null}
      </>
    )
  }
  const data = () => {
    const adminData = [
      {
        id: 1,
        icon: <ViewHeadline />,
        title: 'Seções',
        func: () => setOpen(!open),
        arrow: (
          <>
            {open ? (
              <ArrowDropUp style={{ marginLeft: 'auto' }} />
            ) : (
              <ArrowDropDown style={{ marginLeft: 'auto' }} />
            )}
          </>
        ),
        children: (
          <Collapse in={open} timeout='auto' unmountOnExit>
            <MenuList />
          </Collapse>
        ),
      },
      {
        id: 2,
        icon: <Dashboard />,
        func: null,
        title: 'Admin panel',
        children: null,
        arrow: null,
      },
      {
        id: 4,
        icon: <Instagram />,
        func: null,
        title: 'Instagram',
        children: null,
        arrow: null,
      },
      {
        id: 3,
        func: logoutHandler,
        icon: <ExitToApp />,
        title: 'Logout',
        children: null,
        arrow: null,
      },
    ]
    const writerData = [
      {
        id: 1,
        icon: <ViewHeadline />,
        title: 'Seções',
        func: () => setOpen(!open),
        arrow: (
          <>
            {open ? (
              <ArrowDropUp style={{ marginLeft: 'auto' }} />
            ) : (
              <ArrowDropDown style={{ marginLeft: 'auto' }} />
            )}
          </>
        ),
        children: (
          <Collapse in={open} timeout='auto' unmountOnExit>
            <MenuList />
          </Collapse>
        ),
      },
      {
        id: 2,
        icon: <Dashboard />,
        func: null,
        title: 'Dashboard',
        children: null,
        arrow: null,
      },
      {
        id: 4,
        icon: <Instagram />,
        func: null,
        title: 'Instagram',
        children: null,
        arrow: null,
      },
      {
        id: 3,
        func: logoutHandler,
        icon: <ExitToApp />,
        title: 'Logout',
        children: null,
        arrow: null,
      },
    ]
    const userData = [
      {
        id: 1,
        icon: <ViewHeadline />,
        title: 'Seções',
        func: () => setOpen(!open),
        arrow: (
          <>
            {open ? (
              <ArrowDropUp style={{ marginLeft: 'auto' }} />
            ) : (
              <ArrowDropDown style={{ marginLeft: 'auto' }} />
            )}
          </>
        ),
        children: (
          <Collapse in={open} timeout='auto' unmountOnExit>
            <MenuList />
          </Collapse>
        ),
      },
      {
        id: 2,
        icon: <Instagram />,
        func: null,
        title: 'Instagram',
        children: null,
        arrow: null,
      },
      {
        id: 3,
        func: logoutHandler,
        icon: <ExitToApp />,
        title: 'Logout',
        children: null,
        arrow: null,
      },
    ]
    switch (auth.role) {
      case 'WRITER':
        return writerData.map((item) => <Options key={item.id} item={item} />)
      case 'ADMIN':
        return adminData.map((item) => <Options item={item} key={item.id} />)
      default:
        return userData.map((item) => <Options item={item} key={item.id} />)
    }
  }
  Options.propTypes = {
    item: PropTypes.object.isRequired,
  }
  return {
    data,
    classes,
    history,
    auth,
  }
}
