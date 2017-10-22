import React from 'react'
import './hand-signal.scss';

const HandSignal = props => {
    return (
        <figure className="m-hand-signal">
            <img className="m-hand-signal__icon" src={props.image} alt={props.name}/>
            <figcaption className="m-hand-signal__name">{props.name}</figcaption>
        </figure>
    );
};

export default HandSignal;