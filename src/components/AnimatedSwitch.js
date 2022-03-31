import React from 'react';
import  {TransitionGroup, CSSTransition} from 'react-transition-group';
import {useLocation} from 'react-router-dom';

import RoutesList from './Routes';
import PageAnimation from '../styled/PageAnimation';

const AnimatedSwitch = () => {
    let location = useLocation();
    const {key, pathname} = location;
    const animationTime = 1000;

    return (
        <TransitionGroup>
            <CSSTransition 
            classNames="page-animation" timeout={animationTime} 
            key={key ? key : pathname}>
                <PageAnimation time={animationTime}>
                    <RoutesList location={location}/>
                </PageAnimation>
            </CSSTransition>
        </TransitionGroup>
    )     
}

export default AnimatedSwitch;