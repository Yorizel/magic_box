import React from 'react'
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core'
import { ArrowRight, DonutLarge, ExitToApp, PostAdd } from '@material-ui/icons'
import DefaultLogo from '../../@global/logo'

export default function DashboardSideBar() {
  const data = [
    { id: 1, icon: <DonutLarge />, title: 'Resumo', func: null },
    { id: 2, icon: <PostAdd />, title: 'Posts' },
    { id: 3, icon: <ExitToApp />, title: 'Logout' },
  ]
  return (
    <Box className={'justify-between'}>
      <Box>
        <DefaultLogo fontSize={'1.25rem'} size={45} />
      </Box>
      <Box>
        <List>
          {data.map((item) => (
            <ListItem button key={item.id} onClick={item.func}>
              {item.component}
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>
                <Typography>{item.title}</Typography>
              </ListItemText>
              <ListItemIcon>
                <ArrowRight />
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  )
}
