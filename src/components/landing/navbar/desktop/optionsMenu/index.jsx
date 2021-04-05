import { IconButton, Menu } from '@material-ui/core'
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons'
import AvatarMenuList from './menu'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

function NavbarOptionsMenu({ handleClick }) {
  const [menu, setMenu] = useState(null)
  return (
    <>
      <IconButton
        style={{
          backgroundColor: '#C7BDBD',
          maxHeight: 40,
          maxWidth: 40,
          borderRadius: 60,
        }}
        onClick={(e) => setMenu(e.currentTarget)}
      >
        {menu ? (
          <ArrowDropUp style={{ color: 'white' }} />
        ) : (
          <ArrowDropDown style={{ color: 'white' }} />
        )}
      </IconButton>
      <Menu
        open={Boolean(menu)}
        PaperProps={{
          style: {
            transform: 'translateX(-25%) translateY(25%)',
          },
        }}
        onClose={() => setMenu(null)}
        anchorEl={menu}
      >
        <AvatarMenuList handleClick={handleClick} />
      </Menu>
    </>
  )
}
NavbarOptionsMenu.propTypes = {
  handleClick: PropTypes.func,
}
export default NavbarOptionsMenu
