import React, { useState } from 'react'
import {
  Box,
  Button,
  Grid,
  Icon,
  IconButton,
  List,
  ListItem,
  Menu,
} from '@material-ui/core'
import DefaultLogo from '../../../@global/logo'
import DefaultAvatar from '../../../@global/avatar'
import { ArrowDropDown, ViewHeadline } from '@material-ui/icons'

function DesktopDashboardNavbar() {
  const [open, setOpen] = useState(null)
  return (
    <>
      <Grid
        justify={'space-between'}
        alignContent={'center'}
        alignItems={'center'}
        container
      >
        <Grid item>
          <IconButton style={{ marginRight: 16 }}>
            <ViewHeadline />
          </IconButton>
          <DefaultLogo fontSize={'1.50rem'} size={40} />
        </Grid>
        <Grid item>
          <Button
            onClick={(e) => setOpen(e.currentTarget)}
            style={{
              textTransform: 'none',
              borderRadius: 25,
            }}
          >
            <Box display={'flex'}>
              <DefaultAvatar fontSize={'1.50rem'} size={40} />
              <Icon>
                <ArrowDropDown fontSize={'large'} />
              </Icon>
            </Box>
          </Button>
        </Grid>
      </Grid>
      <Menu open={Boolean(open)} anchorEl={open} onClose={() => setOpen(null)}>
        <List>
          <ListItem>Deu certto</ListItem>
        </List>
      </Menu>
    </>
  )
}
export default DesktopDashboardNavbar
