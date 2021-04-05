import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core'
import useStyles from './style'
import { ArrowRight, Dashboard, ExitToApp } from '@material-ui/icons'
import { DefaultMenuAvatar } from '../../../../../@global/avatar'
import React, { useContext } from 'react'
import { AuthContext } from '../../../../../../context/authContext'
import PropTypes from 'prop-types'

function AvatarMenuList({ handleClick }) {
  const { setAuth } = useContext(AuthContext)

  const logoutHandler = () => {
    return setAuth({
      token: '',
      isLogged: false,
      first_name: '',
      last_name: '',
    })
  }
  const classes = useStyles()
  const data = [
    { id: 2, icon: <Dashboard />, text: 'Dashboard', func: null },
    { id: 3, icon: <ExitToApp />, text: 'Logout', func: logoutHandler },
  ]
  return (
    <>
      <List style={{ paddingLeft: 3 }} component='div' disablePadding>
        <ListItem style={{ width: '100%' }} onClick={handleClick} button>
          <ListItemIcon>
            <DefaultMenuAvatar />
            <ArrowRight style={{ marginLeft: 'auto' }} />
          </ListItemIcon>
        </ListItem>

        {data.map((item) => (
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
        ))}
      </List>
    </>
  )
}
AvatarMenuList.propTypes = {
  handleClick: PropTypes.func,
}
export default AvatarMenuList
