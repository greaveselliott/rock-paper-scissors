import React from 'react'
import './hand-signal.scss';
import Icon from '../icon';

const HandSignal = ({name, is_selected, is_human, has_won, is_hidden}) => {
    return (
        <figure className={`m-hand-signal${get_reduced_modifier(is_selected, is_human, has_won, is_hidden)}`}>
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

const get_selected_modifier = (is_selected, is_human) => {
    switch (false) {    
        case is_selected:   return "--not-selected";
        case is_human:      return "--selected-by-opponent";
        default:            return "--selected-by-player";
    }
};

const get_has_won_modifier = (has_won) => {
    return has_won ? '--won' : '--lost'
};

const get_is_hidden_modifier = (is_hidden) => {
    return is_hidden ? '--hidden' : '';
};

const get_reduced_modifier = (is_selected, is_human, has_won, is_hidden) => {
    let modifier = ""; 
    
    modifier += get_selected_modifier(is_selected, is_human);
    modifier += get_has_won_modifier(has_won);
    modifier += get_is_hidden_modifier(is_hidden);
        
    return modifier;
};

export { get_selected_modifier, get_has_won_modifier, get_is_hidden_modifier, get_reduced_modifier};

export default HandSignal;