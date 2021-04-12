import { Button, Divider, Grid, List, Modal } from '@material-ui/core'
import React, { useState } from 'react'
import { DefaultMenuAvatar } from '../../../../@global/avatar'
import SearchBar from '../../searchBar'
import { useDrawerListStructure } from './useDrawerListStructure'
import { MobileLogin } from '../../../../login'
import { useHistory } from 'react-router-dom'

export default function MobileDrawer() {
  const { data, classes, auth } = useDrawerListStructure()
  const [open, setOpen] = useState(false)
  const history = useHistory()
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
          <Button
            onClick={
              auth.isLogged
                ? () => history.push('/profile')
                : () => setOpen(true)
            }
            className={classes.avatar}
          >
            <DefaultMenuAvatar />
          </Button>
        </Grid>
      </Grid>
      <Divider />
      <Grid className={classes.searchContainer} item>
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
          {auth.isLogged ? data() : null}
        </List>
      </Grid>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        style={{ minWidth: '100vw' }}
      >
        <MobileLogin dialog={(value) => setOpen(value)} />
      </Modal>
    </>
  )
}
