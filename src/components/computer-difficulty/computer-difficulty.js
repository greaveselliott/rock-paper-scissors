import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './computer-difficulty.scss';
import { computer_difficulties } from '../../logic/configuration';
import { set_computer_rating } from '../../logic/actions';

export const ComputerDifficulty = ({rating, on_change_rating}) => {
    const difficulty = computer_difficulties.filter((option) => option.rating === rating)[0] || computer_difficulties[0];
    const minimum_rating = computer_difficulties[0].rating;
    const maximum_rating = computer_difficulties[computer_difficulties.length - 1].rating;

    return (
        <section className="m-computer-difficulty" aria-labelledby="computer-difficulty-label">
            <div className="m-computer-difficulty__heading">
                <span id="computer-difficulty-label">Computer difficulty</span>
                <strong>{difficulty.rating}</strong>
            </div>
            <div className="m-computer-difficulty__control">
                <button
                    className="m-computer-difficulty__step"
                    type="button"
                    aria-label="Decrease computer rating"
                    disabled={difficulty.rating === minimum_rating}
                    onClick={() => on_change_rating(difficulty.rating - 400)}
                >−</button>
                <input
                    className="m-computer-difficulty__range"
                    type="range"
                    min={minimum_rating}
                    max={maximum_rating}
                    step="400"
                    value={difficulty.rating}
                    aria-label="Computer rating"
                    aria-valuetext={`${difficulty.rating} ${difficulty.name}`}
                    onChange={(event) => on_change_rating(Number(event.target.value))}
                />
                <button
                    className="m-computer-difficulty__step"
                    type="button"
                    aria-label="Increase computer rating"
                    disabled={difficulty.rating === maximum_rating}
                    onClick={() => on_change_rating(difficulty.rating + 400)}
                >+</button>
            </div>
            <div className="m-computer-difficulty__scale" aria-hidden="true">
                <span>400</span>
                <span>2800</span>
            </div>
            <p className="m-computer-difficulty__description">
                <strong>{difficulty.name}</strong>
                <span>{difficulty.description}</span>
            </p>
        </section>
    );
};

ComputerDifficulty.propTypes = {
    rating: PropTypes.number.isRequired,
    on_change_rating: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    rating: state.store.opponent.rating
});

const mapDispatchToProps = dispatch => ({
    on_change_rating: (rating) => dispatch(set_computer_rating(rating))
});

export default connect(mapStateToProps, mapDispatchToProps)(ComputerDifficulty);
