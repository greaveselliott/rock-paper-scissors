import React from 'react';
import './avatar.scss';
import PropTypes from 'prop-types';

const Avatar = ({image, name, score}) => {
    return (
        <figure className="m-avatar">
            <img className="m-avatar__image" src={image} alt={`${name} profile picture.`}/>
            <figcaption className="m-avatar__caption">
                <div className="m-avatar__name">{name}</div>
                <div className="m-avatar__score">Score: {score}</div>
            </figcaption>
        </figure>
    )
}

Avatar.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    score: PropTypes.number
};

export default Avatar;