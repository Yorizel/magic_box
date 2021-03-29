import {
    Dialog,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@material-ui/core'
import useStyles from './style'
import { ArrowRight, Dashboard, ExitToApp } from '@material-ui/icons'
import { DefaultMenuAvatar } from '../../../../../@global/avatar'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../../../../context/authContext'
import SignInDesktop from '../../../../../login/sign_in/desktop'
import LoginPage from '../../../../../../pages/login'
import LoginComponent from '../../../../../login'

export default function AvatarMenuList() {
    const { setAuth } = useContext(AuthContext)
    const [open, setOpen] = useState(false)
    const logoutHandler = () => {
        return setAuth({
            token: '',
            isLogged: false,
            first_name: '',
            last_name: '',
        })
    }
    const classes = useStyles()
    return (
        <>
            <List style={{ paddingLeft: 3 }} component="div" disablePadding>
                <ListItem onClick={() => setOpen(true)} button>
                    <DefaultMenuAvatar />
                    <ListItemIcon>
                        <ArrowRight style={{ marginLeft: 'auto' }} />
                    </ListItemIcon>
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <Dashboard />
                    </ListItemIcon>
                    <ListItemText>
                        <Typography className={classes.textButton}>
                            Dashboard
                        </Typography>
                    </ListItemText>
                    <ListItemIcon>
                        <ArrowRight style={{ marginLeft: 'auto' }} />
                    </ListItemIcon>
                </ListItem>
                <ListItem onClick={logoutHandler} button>
                    <ListItemIcon>
                        <ExitToApp />
                    </ListItemIcon>
                    <ListItemText>
                        <Typography className={classes.textButton}>
                            Logout
                        </Typography>
                    </ListItemText>
                </ListItem>
            </List>
            <Dialog
                BackdropProps={{
                    style: { backgroundColor: 'rgba(0, 0, 0, 0.6)' },
                }}
                PaperProps={{
                    style: {
                        backgroundColor: '#F0F0F0',
                        boxShadow: 'none',
                    },
                }}
                open={open}
                onClose={() => setOpen(false)}
            >
                <LoginComponent />
            </Dialog>
        </>
    )
}
