import { List } from '@material-ui/core'
import React from 'react'
import PropTypes from 'prop-types'
import { useMenuListController } from './useMenuListController'

function AvatarMenuList({ handleClick }) {
  const { data, auth, classes } = useMenuListController({ handleClick })
  return (
    <List className={classes.rootContainer} component='div' disablePadding>
      {auth.isLogged ? data() : null}
    </List>
  )
}

AvatarMenuList.propTypes = {
  handleClick: PropTypes.func,
}
export default AvatarMenuList
