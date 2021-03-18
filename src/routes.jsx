import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Route, Switch, useLocation } from 'react-router-dom'


import LandingPage from './pages/landing'
import Post from './pages/post'

export default function Routes(){
    let location = useLocation();
    return(
        <TransitionGroup>
            <CSSTransition
                key={location.key}
                timeout={300}
                classNames={'page'}
                in={true}
            >
                <Switch location={location}>
                    <Route exact path={'/'} children={<LandingPage/>}/>
                    <Route exact path={'/post'} children={<Post/>}/>
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    )
}