import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Switch } from 'react-router-dom'
import { useRoutesController } from './controllers/RoutesController'

export default function Routes() {
  const { location, routes } = useRoutesController()
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={300}
        classNames={'page'}
        in={true}
      >
        <Switch location={location}>{routes()}</Switch>
      </CSSTransition>
    </TransitionGroup>
  )
}
