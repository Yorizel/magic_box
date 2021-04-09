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

export default function DashboardSideBar() {
  const data = [
    { id: 1, icon: <DonutLarge />, title: 'Resumo', func: null },
    { id: 2, icon: <PostAdd />, title: 'Posts' },
    { id: 3, icon: <ExitToApp />, title: 'Logout' },
  ]
  return (
    <Box
      component={'div'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'start'}
    >
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
  )
}
