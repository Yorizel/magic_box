import { useMediaQuery } from '@material-ui/core'
import useStyles from './style'
import {
  BackstageIcon,
  HeadshotIcon,
  HeroesIcon,
  ShinobiIcon,
} from '../../../../assets'
import React from 'react'

export const useMenuListStructure = () => {
  const responsive = useMediaQuery((theme) => theme.breakpoints.down('md'))
  const classes = useStyles()
  const data = [
    {
      id: 1,
      title: 'Heroes',
      icon: (
        <img src={HeroesIcon} alt={'HeroesIcon'} className={classes.icon} />
      ),
    },
    {
      id: 2,
      title: 'Headshot',
      icon: (
        <img src={HeadshotIcon} alt={'HeadshotIcon'} className={classes.icon} />
      ),
    },
    {
      id: 3,
      title: 'Backstage',
      icon: (
        <img
          src={BackstageIcon}
          alt={'BackstageIcon'}
          className={classes.icon}
        />
      ),
    },
    {
      id: 4,
      title: 'Shinobi',
      icon: (
        <img src={ShinobiIcon} alt={'ShinobiIcon'} className={classes.icon} />
      ),
    },
  ]
  return {
    data,
    classes,
    responsive,
  }
}
