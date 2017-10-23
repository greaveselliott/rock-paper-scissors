import React from 'react'
import './hand-signal.scss';
import Icon from '../icon';
import PropTypes from 'prop-types';

const HandSignal = ({name, modifier, click_handler}) => {
    return (
        <figure onClick={click_handler} className={`m-hand-signal${modifier}`}>
            <div className="m-hand-signal__face">
            <Icon className="m-hand-signal__icon" icon={name}/>
            <figcaption className="m-hand-signal__name">{name}</figcaption>
            </div>
            <div className="m-hand-signal__back">
                <Icon className="m-hand-signal__icon--small" icon="rock"/>
                <Icon className="m-hand-signal__icon--small" icon="paper"/>
                <Icon className="m-hand-signal__icon--small" icon="scissors"/>
            </div>
        </figure>
    );


};

HandSignal.propTypes = {
    name: PropTypes.string.isRequired,
    modifier: PropTypes.string
}

export default HandSignal;