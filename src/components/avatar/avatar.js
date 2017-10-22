import React from 'react';
import './avatar.scss';

const Avatar = props => {
    return (
        <figure className="m-avatar">
            <img className="m-avatar__image" src={props.image} alt={`${props.name} profile picture.`}/>
            <figcaption className="m-avatar__caption">
                <div className="m-avatar__name">{props.name}</div>
                <div className="m-avatar__score">Score: {props.score}</div>
            </figcaption>
        </figure>
    )
}

export default Avatar
