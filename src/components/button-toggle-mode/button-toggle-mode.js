import React from 'react'
import "./button-toggle-mode.scss";
import Button from '../button';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { computer_or_human_player } from '../../logic/actions';


const ButtonToggleMode = ({ is_human, on_toggle_human, on_toggle_computer }) => {
    return (
        <div className="m-button-toggle-mode">
            <div className="m-button-toggle-mode__column">
                <Button click_handler={on_toggle_human} text="Human VS Computer" modifier={is_human ? "--toggled" : "--not-toggled"}/>
            </div>
            <div className="m-button-toggle-mode__column">
                <Button click_handler={on_toggle_computer} text="Computer VS Computer" modifier={is_human ? "--not-toggled" : "--toggled"}/>
            </div>
        </div>
    )
}

ButtonToggleMode.propTypes = {
    is_human: PropTypes.bool,
    on_toggle_human: PropTypes.func,
    on_toggle_computer: PropTypes.func
};


const mapDispatchToProps = dispatch => ({
    on_toggle_human: () => dispatch(computer_or_human_player(true)),
    on_toggle_computer: () => dispatch(computer_or_human_player(false))
});

const mapStateToProps = state => {
    return { is_human: state.store.player.is_human };
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonToggleMode);
