import { IconButton, Menu } from '@material-ui/core'
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons'
import AvatarMenuList from './menu'
import React, { useState } from 'react'

export default function NavbarOptionsMenu() {
    const [secondMenu, setSecondMenu] = useState(null)
    return (
        <>
            <IconButton
                style={{
                    backgroundColor: '#C7BDBD',
                    maxHeight: 40,
                    maxWidth: 40,
                    borderRadius: 60,
                }}
                onClick={(e) => setSecondMenu(e.currentTarget)}
            >
                {Boolean(secondMenu) ? (
                    <ArrowDropUp style={{ color: 'white' }} />
                ) : (
                    <ArrowDropDown style={{ color: 'white' }} />
                )}
            </IconButton>
            <Menu
                open={Boolean(secondMenu)}
                PaperProps={{
                    style: {
                        transform: 'translateX(-25%) translateY(25%)',
                    },
                }}
                onClose={() => setSecondMenu(null)}
                anchorEl={secondMenu}
            >
                <AvatarMenuList />
            </Menu>
        </>
    )
}
