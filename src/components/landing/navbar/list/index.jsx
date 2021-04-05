import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core'
import React from 'react'
import { useMenuListStructure } from './usePageStructure'

export default function MenuList() {
  const { classes, data, responsive } = useMenuListStructure()
  return (
    <List
      style={responsive ? { paddingLeft: 15 } : { paddingLeft: 0 }}
      component='div'
      disablePadding
    >
      {data.map((item) => (
        <ListItem key={item.id} button>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText>
            <Typography className={classes.textButton}>{item.title}</Typography>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  )
}
