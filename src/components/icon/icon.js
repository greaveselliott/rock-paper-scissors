import React from 'react';
import './icon.scss';
import Rock from './rock.svg';
import Paper from './paper.svg';
import Scissors from './scissors.svg';
import Lizard from './lizard.svg';
import Spock from './spock.svg';
import Flask from './flask.svg';
import Rocket from './rock.svg';
import _ from 'lodash';
import PropTypes from 'prop-types';

const Icon = props => {
    return props.icon && <img className={props.className} src={getIconComponent(props.icon)} alt={props.icon}/>;
};

Icon.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string.isRequired,
};

const getIconComponent = (icon) => {

    switch (icon.toLowerCase()) {
        case 'rock':
            return Rock;
        case 'paper':
            return  Paper;
        case 'scissors':
            return Scissors;
        case 'lizard':
            return Lizard;
        case 'spock':
            return Spock;
        default:
            return _.random(0, 1) ? Flask : Rocket;
    }
}


export default Icon;