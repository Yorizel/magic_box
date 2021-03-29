import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Route, Switch, useLocation } from 'react-router-dom'

import LandingPage from './pages/landing'
import Post from './pages/post'
import LoginPage from './pages/login'

export default function Routes() {
    let location = useLocation()
    return (
        <TransitionGroup>
            <CSSTransition
                key={location.key}
                timeout={300}
                classNames={'page'}
                in={true}
            >
                <Switch location={location}>
                    <Route exact path={'/'} children={<LandingPage />} />
                    <Route exact path={'/post'} children={<Post />} />
                    <Route exact path={'/login'} children={<LoginPage />} />
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    )
}
