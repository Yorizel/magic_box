import {
  Button,
  Collapse,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core'
import {
  ExitToApp,
  ExpandLess,
  ExpandMore,
  Instagram,
  ViewHeadline,
} from '@material-ui/icons'
import useStyles from './style'
import React, { useState } from 'react'
import MenuList from '../../list'
import DefaultAvatar from '../../../../@global/avatar'
import SearchBar from '../../searchBar'

export default function MobileDrawer() {
  const [open, setOpen] = useState(false)
  const classes = useStyles()

  return (
    <>
      <Grid
        direction={'column'}
        justify={'center'}
        alignItems={'center'}
        className={classes.root}
        container
      >
        <Grid style={{ marginBottom: 6 }} item>
          <Button style={{ textTransform: 'none', borderRadius: 25 }}>
            <DefaultAvatar />
          </Button>
        </Grid>
      </Grid>
      <Divider />
      <Grid style={{ width: '100%', marginTop: 6 }} item>
        <SearchBar />
      </Grid>
      <Divider />
      <Grid
        alignItems={'flex-start'}
        direction={'column'}
        spacing={1}
        justify={'space-evenly'}
        container
      >
        <List style={{ paddingLeft: 3 }} component='div' disablePadding>
          <ListItem onClick={() => setOpen(!open)} button>
            <ListItemIcon>
              <ViewHeadline />
            </ListItemIcon>
            <ListItemText>
              <Typography className={classes.textButton}>Seções</Typography>
            </ListItemText>
            {open ? (
              <ExpandLess style={{ marginLeft: 'auto' }} />
            ) : (
              <ExpandMore style={{ marginLeft: 'auto' }} />
            )}
          </ListItem>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <MenuList />
          </Collapse>
          <ListItem button>
            <ListItemIcon>
              <Instagram />
            </ListItemIcon>
            <ListItemText>
              <Typography className={classes.textButton}>Instagram</Typography>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText>
              <Typography className={classes.textButton}>Logout</Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Grid>
    </>
  )
}
