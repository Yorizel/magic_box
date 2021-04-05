import { Button, Dialog, Grid } from '@material-ui/core'
import useStyles from './style'
import React, { useContext, useState } from 'react'
import DefaultAvatar from '../../../@global/avatar'
import NavbarSectionsMenu from './sectionMenu'
import NavbarOptionsMenu from './optionsMenu'
import SearchBar from '../searchBar'
import DefaultLogo from '../../../@global/logo'
import { AuthContext } from '../../../../context/authContext'
import LoginComponent from '../../../login'

function DesktopNavbar() {
  const classes = useStyles()
  const { auth } = useContext(AuthContext)
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    if (auth.isLogged) return null
    return setOpen(true)
  }
  return (
    <>
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
        <LoginComponent dialog={(value) => setOpen(value)} />
      </Dialog>
      <Grid
        spacing={2}
        direction={'row'}
        justify={'center'}
        alignItems={'center'}
        container
      >
        <DefaultLogo fontSize={'1.75rem'} size={50} />
      </Grid>
      <Grid
        direction={'row'}
        justify={'center'}
        alignItems={'center'}
        container
      >
        <Grid className={classes.searchBarContainer} item>
          <SearchBar />
        </Grid>
      </Grid>
      <Grid alignItems={'center'} justify={'center'} spacing={5} container>
        <Grid item>
          <NavbarSectionsMenu />
        </Grid>

        <Grid item>
          <Button onClick={handleClick} className={classes.avatarContainer}>
            <DefaultAvatar />
          </Button>
        </Grid>
        <Grid item>
          <NavbarOptionsMenu handleClick={handleClick} />
        </Grid>
      </Grid>
    </>
  )
}

export default DesktopNavbar
