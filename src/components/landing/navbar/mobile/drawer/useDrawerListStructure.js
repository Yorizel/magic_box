import React, { useState } from 'react'
import useStyles from './style'
import { useHistory } from 'react-router-dom'
import {
  ArrowDropDown,
  ArrowDropUp,
  ExitToApp,
  Instagram,
  ViewHeadline,
} from '@material-ui/icons'
import { Collapse } from '@material-ui/core'
import MenuList from '../../list'

export const useDrawerListStructure = () => {
  const [open, setOpen] = useState(false)
  const classes = useStyles()
  const history = useHistory()
  const data = [
    {
      id: 1,
      icon: <ViewHeadline />,
      title: 'Seções',
      func: () => setOpen(!open),
      arrow: (
        <>
          {open ? (
            <ArrowDropUp style={{ marginLeft: 'auto' }} />
          ) : (
            <ArrowDropDown style={{ marginLeft: 'auto' }} />
          )}
        </>
      ),
      children: (
        <Collapse in={open} timeout='auto' unmountOnExit>
          <MenuList />
        </Collapse>
      ),
    },
    {
      id: 2,
      icon: <Instagram />,
      func: null,
      title: 'Instagram',
      children: null,
      arrow: null,
    },
    {
      id: 3,
      func: null,
      icon: <ExitToApp />,
      title: 'Logout',
      children: null,
      arrow: null,
    },
  ]
  return {
    data,
    classes,
    history,
  }
}
