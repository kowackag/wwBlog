import React from 'react';
import  {TransitionGroup, CSSTransition} from 'react-transition-group';
import {withRouter} from 'react-router-dom';

import Routes from './Routes';
import PageAnimation from '../styled/PageAnimation';

const AnimatedSwitch = ({location}) => {
    const {key, pathname} = location;
    const animationTime = 1000;

    return (
        <TransitionGroup>
            <CSSTransition 
            classNames="page-animation" timeout={animationTime} 
            key={key ? key : pathname}>
                <PageAnimation time={animationTime}>
                    <Routes location={location}/>
                </PageAnimation>
            </CSSTransition>
        </TransitionGroup>
    )     
}

export default withRouter(AnimatedSwitch);