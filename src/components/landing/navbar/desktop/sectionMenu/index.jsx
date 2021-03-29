import { IconButton, Menu, Typography } from '@material-ui/core'
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons'
import MenuList from '../../list'
import React, { useState } from 'react'
import useStyles from '../style'

export default function NavbarSectionsMenu() {
    const classes = useStyles()
    const [anchor, setAnchor] = useState(null)
    return (
        <>
            <IconButton onClick={(e) => setAnchor(e.currentTarget)}>
                <Typography className={classes.textButton}>Seções</Typography>
                {Boolean(anchor) ? <ArrowDropUp /> : <ArrowDropDown />}
            </IconButton>
            <Menu
                open={Boolean(anchor)}
                PaperProps={{
                    style: {
                        left: '50%',
                        transform: 'translateX(5%) translateY(15%)',
                    },
                }}
                onClose={() => setAnchor(null)}
                anchorEl={anchor}
            >
                <MenuList />
            </Menu>
        </>
    )
}
