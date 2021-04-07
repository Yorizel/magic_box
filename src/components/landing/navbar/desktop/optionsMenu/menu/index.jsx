import { List, ListItem, ListItemIcon } from '@material-ui/core'
import { ArrowRight } from '@material-ui/icons'
import { DefaultMenuAvatar } from '../../../../../@global/avatar'
import React from 'react'
import PropTypes from 'prop-types'
import { useMenuListController } from './useMenuListController'

function AvatarMenuList({ handleClick }) {
  const { data, auth, classes } = useMenuListController()
  return (
    <>
      <List className={classes.rootContainer} component='div' disablePadding>
        <ListItem
          className={classes.itemContainer}
          onClick={handleClick}
          button
        >
          <ListItemIcon>
            <DefaultMenuAvatar />
            <ArrowRight className={classes.arrowIcon} />
          </ListItemIcon>
        </ListItem>
        {auth.isLogged ? data() : null}
      </List>
    </>
  )
}

AvatarMenuList.propTypes = {
  handleClick: PropTypes.func,
}
export default AvatarMenuList
