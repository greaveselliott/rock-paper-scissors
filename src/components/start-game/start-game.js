import React from 'react';
import './start-game.scss';
import Logo from '../logo';
import Heading from '../heading';
import ButtonToggleMode from '../button-toggle-mode';
import Button from '../button';
import { connect } from 'react-redux';
import { start_game } from '../../logic/actions';

export const StartGame = ({className, active, on_start_game}) => {
    return (
        <div className={`${className}${active ? "": "--inactive"}`}>
            <Logo/>
            <Heading title="Pick mode."/>
            <ButtonToggleMode/>
            <Button click_handler={on_start_game} modifier="--large" text="Start"/>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    on_start_game: () => dispatch(start_game())
});

const mapStateToProps = state => {
    return {
        active: state.store.game_started === false
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartGame);