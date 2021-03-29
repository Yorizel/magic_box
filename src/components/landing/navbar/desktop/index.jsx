import { Button, Grid, Typography } from '@material-ui/core'
import Logo from '../../../../assets/logo.png'
import useStyles from './style'
import React from 'react'
import DefaultAvatar from '../../../@global/avatar'
import NavbarSectionsMenu from './sectionMenu'
import NavbarOptionsMenu from './optionsMenu'
import SearchBar from '../searchBar'
import DefaultLogo from '../../../@global/logo'

export default function DesktopNavbar() {
    const classes = useStyles()

    return (
        <>
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
                <Grid style={{ width: '80%', maxWidth: 300 }} item>
                    <SearchBar />
                </Grid>
            </Grid>
            <Grid
                alignItems={'center'}
                justify={'center'}
                spacing={5}
                container
            >
                <Grid item>
                    <NavbarSectionsMenu />
                </Grid>

                <Grid item>
                    <Button style={{ textTransform: 'none', borderRadius: 25 }}>
                        <DefaultAvatar />
                    </Button>
                </Grid>
                <Grid item>
                    <NavbarOptionsMenu />
                </Grid>
            </Grid>
        </>
    )
}
