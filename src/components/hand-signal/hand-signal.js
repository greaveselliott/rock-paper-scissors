import React from 'react'
import './hand-signal.scss';
import Icon from '../icon';

const HandSignal = props => {
    return (
        <figure className="m-hand-signal">
            <div className="m-hand-signal__face">
            <Icon className="m-hand-signal__icon" icon={props.name}/>
            <figcaption className="m-hand-signal__name">{props.name}</figcaption>
            </div>
            <div className="m-hand-signal__back">
                <Icon className="m-hand-signal__icon--small" icon="rock"/>
                <Icon className="m-hand-signal__icon--small" icon="paper"/>
                <Icon className="m-hand-signal__icon--small" icon="scissors"/>
            </div>
        </figure>
    );
};

export default HandSignal;