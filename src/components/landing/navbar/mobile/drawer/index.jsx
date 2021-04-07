import { Button, Divider, Grid, List, Modal } from '@material-ui/core'
import React, { useState } from 'react'
import DefaultAvatar from '../../../../@global/avatar'
import SearchBar from '../../searchBar'
import { useDrawerListStructure } from './useDrawerListStructure'
import { MobileLogin } from '../../../../login'

export default function MobileDrawer() {
  const { data, classes, auth } = useDrawerListStructure()
  const [open, setOpen] = useState(false)
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
          <Button onClick={() => setOpen(true)} className={classes.avatar}>
            <DefaultAvatar fontSize={'1.25rem'} size={45} />
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
