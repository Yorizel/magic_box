import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Route, Switch, useLocation } from 'react-router-dom'


import LandingPage from './pages/landing'

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
                <Switch location={location.key}>
                    <Route exact path={'/'} children={<LandingPage/>}/>

                </Switch>
            </CSSTransition>
        </TransitionGroup>
    )
}